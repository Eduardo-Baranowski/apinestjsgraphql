import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as OrmOptions from './config/orm'
import RepoModule from './repo.module';
import UserResolver from './resolvers/user.resolver';
import MessageResolver from './resolvers/message.resolver';

const gqlImports = [
  UserResolver, MessageResolver
];

@Module({
  imports: [TypeOrmModule.forRoot(OrmOptions), RepoModule, ...gqlImports, GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    playground: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
