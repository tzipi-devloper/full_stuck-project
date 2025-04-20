import { configureStore } from "@reduxjs/toolkit";
import competiton from '../features/competitions/competitionsSlice';
import leaderboard from '../features/leaderboard/leaderboardSlice'
import submissions from '../features/submissions/submissionsSlice'
import authSlice from '../features/auth/authSlice'
import authAPI from '../features/auth/authAPI'
const store = configureStore({
    reducer: {
        competiton,
        leaderboard,
        [authAPI.reducerPath]: authSlice.reducer,
        submissions,
    },
    middleware: (getDefaultMiddlware) => {
        return getDefaultMiddlware().concat(authSlice.middleware)
    }
})

export default store
