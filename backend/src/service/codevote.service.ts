import { Injectable } from '@nestjs/common';
import { Codevote, CodevoteInput, Snippet, Vote, VoteInput } from "../generated/graphql";
import { Ctx } from "../context";
import { Authenticated } from "./user.service";
import { DatastoreRepository } from "../lib/datastore.repository";
import ShortUniqueId from "short-unique-id";

/**
 * Database version of a CodeVote
 */
export interface CodevoteEntity extends Omit<Codevote, 'creator' | 'snippet1' | 'snippet2'> {
    userId: string; // Replace creator with just a userId
    snippet1: SnippetEntity; // Replace snippet.votes.users with snippet.votes.userId
    snippet2: SnippetEntity;
}
export interface SnippetEntity extends Omit<Snippet, 'votes' | 'voteCount'> {
    voteCount?: number // VoteCount is calculated
    votes: VoteEntity[]; // Overide votes to only have a userId, not a whole user
}
export interface VoteEntity extends Omit<Vote, 'user'> {
    userId: string;
}

@Injectable()
export class CodevoteRepository extends DatastoreRepository<CodevoteEntity> {
    constructor() {
        super('Codevote');
    }
}

@Injectable()
export class CodevoteService {

    generateId = new ShortUniqueId({ length: 12 });

    constructor(private codevoteRepo: CodevoteRepository) {
    }

    @Authenticated()
    async createCodevote(ctx: Ctx, input: CodevoteInput): Promise<CodevoteEntity> {
        let id;
        let exists = true;
        while(exists) { // Generate new id if exists
            id = this.generateId();
            exists = await this.codevoteRepo.exists(id);
        }
        await this.codevoteRepo.save({
            id,
            createdAt: new Date(),
            userId: ctx.user.id,
            snippet1: {
                ...input.snippet1,
                id: this.generateId(),
                votes: []
            },
            snippet2: {
                ...input.snippet2,
                id: this.generateId(),
                votes: []
            }
        });
        return this.getCodevote(ctx, id);
    }

    async getCodevote(ctx: Ctx, id: string): Promise<CodevoteEntity> {
        return this.setVoteCount(await this.codevoteRepo.get(id));
    }

    async getAllCodevotes(ctx: Ctx): Promise<CodevoteEntity[]> {
        return (await this.codevoteRepo.getAll()).map(this.setVoteCount);
    }

    @Authenticated()
    async vote(ctx: Ctx, input: VoteInput): Promise<CodevoteEntity> {
        // TODO
        // Get existing votes
        // Check if already
        return this.getCodevote(ctx, input.codevoteId)
    }

    private setVoteCount(entity: CodevoteEntity): CodevoteEntity {
        return {
            ...entity,
            snippet1: {
                ...entity.snippet1,
                voteCount: entity.snippet1.votes?.length || 0
            },
            snippet2: {
                ...entity.snippet2,
                voteCount: entity.snippet2.votes?.length || 0
            }
        }
    }
}
