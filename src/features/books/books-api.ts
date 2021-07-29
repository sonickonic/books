import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BooksRequestParams, BooksResponse } from './types';

const API_ROOT = 'http://nyx.vima.ekt.gr:3000';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROOT,
  }),
  endpoints: (builder) => ({
    postBooks: builder.query<BooksResponse, BooksRequestParams>({
      query: (body) => {
        return {
          url: '/api/books',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { usePostBooksQuery } = booksApi;
