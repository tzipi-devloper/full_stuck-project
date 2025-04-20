import { createSlice } from "@reduxjs/toolkit";

interface SubmissionsState {
    val: string;
}

const initialState: SubmissionsState = {
    val: "submissions",
};

const submissionsSlice = createSlice({
    name: "submissions",
    initialState,
    reducers: {
        show: (state: SubmissionsState) => {
            alert(state.val);
        },
    },
});

export const { show } = submissionsSlice.actions;
export default submissionsSlice.reducer;
