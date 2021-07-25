import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
export {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from './hooks';

export const createStore = () =>
  configureStore({
    reducer: {},
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
