import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query()
  async codeVote(@Args('id') id: string) {
    return {
      snippet1: 'Some code snippetss 1',
      snippet2: 'Some code snippetss 2',
      creator: 'martijn@oppedijk.online',
    };
  }
}
