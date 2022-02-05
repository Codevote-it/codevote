import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthController } from './auth.controller';
import { AuthenticationError } from 'apollo-server-express';
import { CodeVote } from "./generated/graphql";

@Resolver()
export class AppResolver {

  @Query()
  async codeVote(@Args('id') id: string): Promise<CodeVote> {
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

  @Query()
  async me(_obj, _args, context) {
    const token = context.req?.headers?.authorization;
    if (!token) {
      throw new AuthenticationError(`No Bearer token provided.`);
    }
    return AuthController.decode(token.replace('Bearer ', ''));
  }
}
