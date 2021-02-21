import { DataSource } from 'apollo-datasource';
import { Book, Maybe } from '../generated/gql-types';

class BookSource extends DataSource {
  constructor() {
    super();
  }

  getBooks() {
    return [
      {
        title: 'The Awakening',
        author: 'Kate Chopin',
      },
      {
        title: 'City of Glass',
        author: 'Paul Auster',
      },
    ];
  }
}

export default BookSource;
