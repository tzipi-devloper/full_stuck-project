import { configureStore } from "@reduxjs/toolkit";
import competiton from '../features/competitions/competitionsSlice';
import leaderboard from '../features/leaderboard/leaderboardSlice'
import submissions from '../features/submissions/submissionsSlice'
import authSlice from '../features/auth/authSlice'
import authAPI from '../features/auth/authAPI'
import authState from '../features/auth/authStateSlice';
const store = configureStore({
    reducer: {
        competiton,
        leaderboard,
        [authAPI.reducerPath]: authSlice.reducer,
        submissions,
        authState
    },
    middleware: (getDefaultMiddlware) => {
        return getDefaultMiddlware().concat(authSlice.middleware)
    }
})
export type RootState = ReturnType<typeof store.getState>;
export default store
export type AppDispatch = typeof store.dispatch;
