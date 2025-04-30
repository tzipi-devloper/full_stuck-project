import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInfo } from './authTypes'; 
import { RootState } from '../../app/store'; 
interface AuthState {
  user: userInfo | null;
}

const initialState: AuthState = {
  user: null,
};

const authStateSlice = createSlice({
  name: 'authUserSlice',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<userInfo>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});
export const selectCurrentUser = (state: RootState) => state.authUserSlice.user;
export const { setUser, clearUser } = authStateSlice.actions;
export default authStateSlice.reducer;
