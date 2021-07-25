import { BooksRequestParams } from './types';

const API_ROOT = 'http://nyx.vima.ekt.gr:3000';

export const booksAPI = {
  fetchBooks: (params: BooksRequestParams) =>
    fetch(`${API_ROOT}/api/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }),
};
