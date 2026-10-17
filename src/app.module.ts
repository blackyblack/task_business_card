import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ProfileModule } from "./profile/profile.module.js";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            sortSchema: true,
            introspection: true,
            graphiql: false,
            plugins: [
                // enable the GraphQL playground
                ApolloServerPluginLandingPageLocalDefault(),
            ],
        }),
        ProfileModule,
    ],
})
export class AppModule {}
