import { Injectable } from '@nestjs/common';
import { Codevote } from "../generated/graphql";

@Injectable()
export class CodevoteService {

    constructor() {
    }

    async getCodevote(id: string): Promise<Codevote> {
        return {
            id: 'boguss',
            snippet1: 'Some code snippetss 1',
            snippet2: 'Some code snippetss 2',
            creator: {
                id: 'boguss',
                username: 'username',
                displayName: 'Martinho',
                profileImageUrl: 'https://avatars.githubusercontent.com/u/6604455?v=4',
            },
        };
    }
}
