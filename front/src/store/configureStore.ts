import { configureStore } from '@reduxjs/toolkit';
import characters from './modules/characters';
import user from './modules/user';

const store = configureStore({
  reducer: {
    characters,
    user,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
