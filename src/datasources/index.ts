import BookSource from './books';

type PartialContext = ReturnType<typeof context> extends Promise<infer T> ? T : never;

export type TContext = PartialContext & {
  dataSources: ReturnType<typeof dataSources>;
};

export const dataSources = () => ({
  books: new BookSource(),
});

export const context = async () => ({
  //
});
