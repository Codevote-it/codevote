import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { GithubStrategy } from './lib/github.strategy';
import { CodevoteService } from "./service/codevote.service";
import { getContext } from "./context";
import { CodevoteRepository, UserRepository } from "./lib/datastore.repository";
import { AppController } from "./app.controller";
import { AuthService } from "./service/auth.service";

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => getContext(req)
    }),
  ],
  controllers: [AppController],
  providers: [CodevoteService, AppResolver, GithubStrategy, UserRepository, CodevoteRepository, AuthService, CodevoteService],

})
export class AppModule {}
