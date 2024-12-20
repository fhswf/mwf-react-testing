import { createSelector, createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authActions';

interface AuthState {
    loading: boolean;
    userInfo: any;
    accessToken: string;
    error: any,
    success: boolean
};

const initialState: AuthState = {
    loading: false,
    userInfo: null,
    accessToken: null,
    error: null,
    success: false,
  }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state: AuthState) => {
            state.loading = true,
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state: AuthState, { payload }) => {
            state.loading = false;
            state.userInfo = payload;
            state.accessToken = payload.accessToken;
        });
        builder.addCase(loginUser.rejected, (state: AuthState, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(registerUser.pending, (state: AuthState) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state: AuthState) => {
            state.loading = false;
            state.success = true;
        });
        builder.addCase(registerUser.rejected, (state: AuthState, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
    }
});

export default authSlice.reducer;
