import { Injectable, Logger } from '@nestjs/common';
import { Codevote, CodevoteInput, Scalars, Snippet, User, Vote, VoteInput } from "../generated/graphql";
import { Ctx } from "../context";
import { Authenticated, UserService } from "./user.service";
import { DatastoreRepository } from "../lib/datastore.repository";
import ShortUniqueId from "short-unique-id";
import { logger } from "../logger";

const generateId = new ShortUniqueId({ length: 12 });

/**
 * Database version of a CodeVote
 */
export interface CodevoteEntity {
    id: string;
    createdAt: Date
    userId: string; // Replace creator with just a userId
    snippet1: SnippetEntity; // Replace snippet.votes.users with snippet.votes.userId
    snippet2: SnippetEntity;
}

export interface SnippetEntity {
    id: string;
    createdAt: Date
    content: string
    title: Scalars['String'];
    voteCount?: number // VoteCount is calculated
    votes: VoteEntity[]; // Overide votes to only be a list of userIds, not a whole user
}

export class VoteEntity {
    readonly id: string
    readonly createdAt: Date

    constructor(public readonly userId: string) {
        this.id = generateId();
        this.createdAt = new Date();
    }
}

@Injectable()
export class CodevoteRepository extends DatastoreRepository<CodevoteEntity> {
    constructor() {
        super('Codevote');
    }
}

@Injectable()
export class CodevoteService {

    constructor(
        private codevoteRepo: CodevoteRepository,
        private userService: UserService
    ) {
    }

    @Authenticated()
    async createCodevote(ctx: Ctx, input: CodevoteInput): Promise<Codevote> {
        const id =  generateId();
        await this.codevoteRepo.save({
            id,
            createdAt: new Date(),
            userId: ctx.user!.id,
            snippet1: {
                ...input.snippet1,
                createdAt: new Date(),
                id: generateId(),
                votes: []
            },
            snippet2: {
                ...input.snippet2,
                createdAt: new Date(),
                id: generateId(),
                votes: []
            }
        });
        return this.getCodevote(ctx, id);
    }

    async getCodevote(ctx: Ctx, id: string): Promise<Codevote> {
        const codevote = await this.getOrThrow(id);
        const creatorId = codevote.userId;
        const userIds1 = codevote.snippet1.votes.map(v => v.userId)
        const userIds2 = codevote.snippet2.votes.map(v => v.userId);
        const [creator, voters1, voters2] = await Promise.all([
            creatorId ? this.userService.getUser(creatorId) : undefined,
            userIds1?.length ? this.userService.getUsers(userIds1) : [],
            userIds2?.length ? this.userService.getUsers(userIds2) : [],
        ]);
        if (!creator) {
            throw Error(`Creator with userId ${creatorId} does not exist for Codevote ${id}`);
        }
        return {
            ...codevote,
            creator: creator,
            snippet1: this.mapToSnippet(codevote.snippet1, voters1),
            snippet2: this.mapToSnippet(codevote.snippet2, voters2),
        }

    }

    async getAllCodevotes(ctx: Ctx): Promise<Codevote[]> {
        const codevotes = await this.codevoteRepo.getAll();
        const creatorIds = codevotes.map(codevote => codevote.userId);
        const creators = await this.userService.getUsers(creatorIds);
        return codevotes.map(codevote => ({
            ...codevote,
            snippet1: this.mapToSnippet(codevote.snippet1),
            snippet2: this.mapToSnippet(codevote.snippet1),
            creator: creators.find(c => c.id === codevote.userId)!
        }));
    }

    @Authenticated()
    async vote(ctx: Ctx, input: VoteInput): Promise<Codevote> {
        const voterId = ctx.user!.id;
        const codevote = await this.getOrThrow(input.codevoteId);
        // Remove existing vote if exists
        codevote.snippet1.votes = codevote.snippet1.votes.filter(v => v.userId !== voterId);
        codevote.snippet2.votes = codevote.snippet2.votes.filter(v => v.userId !== voterId);
        if (codevote.snippet1.id === input.snippetId) {
            codevote.snippet1.votes.push(new VoteEntity(voterId));
        } else if (codevote.snippet2.id === input.snippetId) {
            codevote.snippet2.votes.push(new VoteEntity(voterId));
        } else {
            throw Error(`SnippetId ${input.snippetId} does not belong to Codevote ${input.codevoteId}`);
        }
        await this.codevoteRepo.update(codevote.id, codevote);
        logger.log(`User ${ctx.user?.username}(${ctx.user?.id}) voted for snippet ${input.snippetId} for Codevote ${codevote.id}`);
        return this.getCodevote(ctx, input.codevoteId)
    }

    async getOrThrow(id: string): Promise<CodevoteEntity> {
        const codevote = await this.codevoteRepo.get(id);
        if (!codevote) {
            throw Error(`No Codevote with id ${id} found`);
        }
        return codevote;
    }

    /**
     * Add voters to snippets if voters given. If not, just count votes
     */
    private mapToSnippet(snippet: SnippetEntity, voters?: User[]): Snippet {
        const voteCount = snippet.votes.length || 0;
        let votes: Vote[] = [];
        if (voters) {
            votes = snippet.votes.map(v => this.mapToVote(v, voters));
        }
        return {
            ...snippet,
            voteCount,
            votes
        }
    }

    private mapToVote(vote: VoteEntity, voters: User[]): Vote {
        const user = voters.find(voter => voter.id === vote.userId);
        return {
            ...vote,
            user
        }
    }
}
