import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import { booksAPI } from './books-api';
import { BooksResponse, BooksState, BooksRequestParams } from './types';

const initialState: BooksState = {
  books: [],
  count: 0,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<BooksResponse>) => {
      const { count, books } = action.payload;

      state.count = count;
      state.books = books;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export const fetchBooks =
  (params: BooksRequestParams): AppThunk =>
  async (dispatch) => {
    const response = await booksAPI.fetchBooks(params);
    const books = await response.json();

    dispatch(setBooks(books));
  };

export const selectCount = (state: RootState) => state.books.count;
export const selectBooks = (state: RootState) => state.books.books;

export const reducer = booksSlice.reducer;
