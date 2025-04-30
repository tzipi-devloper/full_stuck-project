import { configureStore } from "@reduxjs/toolkit";
import competition from '../features/competitions/competitionsSlice';
import leaderboard from '../features/leaderboard/leaderboardSlice';
import submissions from '../features/submissions/submissionsSlice';
import authUserSlice from '../features/auth/authUserSlice';
import authAPI from '../features/auth/authAPI';
import competitionsAPI from '../features/competitions/competitionsAPI';

const store = configureStore({
  reducer: {
    competition,
    leaderboard,
    submissions,
    authUserSlice,
    [authAPI.reducerPath]: authAPI.reducer,
    [competitionsAPI.reducerPath]: competitionsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authAPI.middleware)
      .concat(competitionsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
