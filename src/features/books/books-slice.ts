import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import { booksAPI } from './books-api';
import { BooksResponse, BooksState, BooksRequestParams } from './types';

const initialState: BooksState = {
  books: [],
  count: 0,
  isLoading: false,
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
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setBooks, setIsLoading } = booksSlice.actions;

export const fetchBooks =
  (params: BooksRequestParams): AppThunk =>
  async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
      const response = await booksAPI.fetchBooks(params);
      const books = await response.json();

      dispatch(setBooks(books));
    } catch (e) {
      console.warn(e);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const selectCount = (state: RootState) => state.books.count;
export const selectBooks = (state: RootState) => state.books.books;
export const selectIsLoading = (state: RootState) => state.books.isLoading;

export const reducer = booksSlice.reducer;
