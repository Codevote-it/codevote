import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { GithubStrategy } from './lib/github.strategy';
import {
  CodevoteRepository,
  CodevoteService,
} from './service/codevote.service';
import { getContext } from './context';
import { AppController } from './app.controller';
import { UserService, UserRepository } from './service/user.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => getContext(req),
    }),
  ],
  controllers: [AppController],
  providers: [
    CodevoteService,
    AppResolver,
    GithubStrategy,
    UserRepository,
    CodevoteRepository,
    UserService,
    CodevoteService,
  ],
})
export class AppModule {}
