import { configureStore } from "@reduxjs/toolkit";
import competiton from '../features/competitions/competitionsSlice';
import leaderboard from '../features/leaderboard/leaderboardSlice'
import submissions from '../features/submissions/submissionsSlice'
const store = configureStore({
    reducer: {
        competiton,
        leaderboard,
        submissions
    },
})

export default store