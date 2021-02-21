import { join } from 'path';
import { ApolloServer } from 'apollo-server';

import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';
import { dataSources } from './datasources';

const schema = loadSchemaSync(join(__dirname, '../schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
  // @ts-ignore (FIXME: should be casted to default Resolvers type?)
  schema: addResolversToSchema({ schema, resolvers }),
  dataSources,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
