import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { Codevote, User } from "./generated/graphql";
import { Ctx } from "./context";
import { AuthService } from "./service/auth.service";
import { CodevoteService } from "./service/codevote.service";

@Resolver()
export class AppResolver {

    constructor(private authService: AuthService, private codevoteService: CodevoteService) {
    }

    @Query()
    async codevote(@Args('id') id: string): Promise<Codevote> {
        return this.codevoteService.getCodevote(id);
    }

    @Query()
    async me(@Context() ctx: Ctx): Promise<User> {
        return this.authService.getLoggedInUser(ctx);
    }
}
