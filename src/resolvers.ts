import { Resolvers } from './generated/gql-types';
import { TContext } from './datasources';

export const resolvers: Resolvers<TContext> = {
  Query: {
    books: (_, __, { dataSources }) => dataSources.books.getBooks(),
  },
};
