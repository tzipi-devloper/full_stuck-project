import { createSlice } from "@reduxjs/toolkit";

interface LeaderboardState {
    val: string;
}

const initialState: LeaderboardState = {
    val: "leaderboard",
};

const leaderboardSlice = createSlice({
    name: "leaderboard",
    initialState,
    reducers: {
        show: (state: LeaderboardState) => {
            alert(state.val);
        },
    },
});

export const { show } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
