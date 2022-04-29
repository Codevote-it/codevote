import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Codevote, CodevoteInput, User, VoteInput } from "./generated/graphql";
import { Ctx } from "./context";
import { UserService } from "./service/user.service";
import { CodevoteEntity, CodevoteService } from "./service/codevote.service";

@Resolver()
export class AppResolver {

    constructor(private authService: UserService, private codevoteService: CodevoteService) {
    }

    @Query()
    async codevote(@Context() ctx: Ctx, @Args('id') id: string): Promise<Codevote> {
        return this.codevoteService.getCodevote(ctx, id);
    }

    @Query()
    async allCodevotes(@Context() ctx: Ctx, @Args('id') id: string): Promise<Codevote[]> {
        return this.codevoteService.getAllCodevotes(ctx);
    }

    @Mutation()
    async createCodevote(@Context() ctx: Ctx, @Args('input') input: CodevoteInput): Promise<Codevote> {
        return this.codevoteService.createCodevote(ctx, input);
    }

    @Mutation()
    async vote(@Context() ctx: Ctx, @Args('input') input: VoteInput): Promise<Codevote> {
        return this.codevoteService.vote(ctx, input);
    }

    @Query()
    async me(@Context() ctx: Ctx): Promise<User> {
        return this.authService.getLoggedInUser(ctx);
    }
}
