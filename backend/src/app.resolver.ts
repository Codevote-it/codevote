import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Codevote, CodevoteInput, User } from "./generated/graphql";
import { Ctx } from "./context";
import { AuthService } from "./service/auth.service";
import { CodevoteEntity, CodevoteService } from "./service/codevote.service";

@Resolver()
export class AppResolver {

    constructor(private authService: AuthService, private codevoteService: CodevoteService) {
    }

    @Query()
    async codevote(@Context() ctx: Ctx, @Args('id') id: string): Promise<Omit<Codevote, 'creator'>> {
        return this.codevoteService.getCodevote(ctx, id);
    }

    @Query()
    async allCodevotes(@Context() ctx: Ctx, @Args('id') id: string): Promise<Omit<Codevote, 'creator'>[]> {
        return this.codevoteService.getAllCodevotes(ctx);
    }

    @Mutation()
    async createCodevote(@Context() ctx: Ctx, @Args('input') input: CodevoteInput): Promise<Omit<Codevote, 'creator'>> {
        return this.codevoteService.creatCodevote(ctx, input);
    }

    @Query()
    async me(@Context() ctx: Ctx): Promise<User> {
        return this.authService.getLoggedInUser(ctx);
    }

    @ResolveField()
    @Resolver('Codevote')
    async creator(@Parent() { userId }: CodevoteEntity): Promise<User> {
        return this.authService.getUser(userId);
    }
}
