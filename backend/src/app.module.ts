import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { AuthController } from './auth.controller';
import { GithubStrategy } from './github.strategy';
import { UserDatastoreService } from './datastore.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [AuthController],
  providers: [AppService, AppResolver, GithubStrategy, UserDatastoreService],
})
export class AppModule {}
