import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { reducer as booksReducer } from './features/books/books-slice';
export {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from './hooks';

export const createStore = () =>
  configureStore({
    reducer: {
      books: booksReducer,
    },
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const store = createStore();
