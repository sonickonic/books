import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { booksApi } from './features/books/books-api';

export {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from './hooks';

export const createStore = () =>
  configureStore({
    reducer: {
      [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(booksApi.middleware),
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
