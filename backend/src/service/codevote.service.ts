import { Injectable } from '@nestjs/common';
import { Codevote, CodevoteInput } from "../generated/graphql";
import { Ctx } from "../context";
import { Authenticated } from "./auth.service";
import { DatastoreRepository } from "../lib/datastore.repository";
import ShortUniqueId from "short-unique-id";

/**
 * Database version of a CodeVote
 */
export interface CodevoteEntity extends Omit<Codevote, 'creator'> {
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
    async creatCodevote(ctx: Ctx, input: CodevoteInput): Promise<CodevoteEntity> {
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
            snippet1: input.snippet1,
            snippet2: input.snippet2
        });
        return this.codevoteRepo.get(id);
    }

    async getCodevote(ctx: Ctx, id: string): Promise<CodevoteEntity> {
        return this.codevoteRepo.get(id);
    }

    async getAllCodevotes(ctx: Ctx): Promise<CodevoteEntity[]> {
        return this.codevoteRepo.getAll();
    }
}
