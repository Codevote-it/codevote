import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from "./app.resolver";

@Module({
    imports: [
        GraphQLModule.forRoot({
            playground: true,
            typePaths: ['./**/*.graphql'],
        }),
    ],
    providers: [AppService, AppResolver],
})
export class AppModule {
}
