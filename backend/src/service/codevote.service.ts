import { Injectable } from '@nestjs/common';
import { Codevote } from "../generated/graphql";

@Injectable()
export class CodevoteService {

    constructor() {
    }

    async getCodevote(id: string): Promise<Codevote> {
        return {
            id: 'boguss',
            createdAt: new Date(),
            snippet1: {
                title: 'Bad code sample',
                content: 'Some code snippetss 1',
            },
            snippet2: {
                title: 'Good code sample',
                content: 'Some code snippetss 2',
            },
            creator: {
                id: 'boguss',
                username: 'username',
                displayName: 'Martinho',
                profileImageUrl: 'https://avatars.githubusercontent.com/u/6604455?v=4',
            },
        };
    }
}
