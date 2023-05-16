import { createSlice } from "@reduxjs/toolkit";
import { signup, login, current, updateUser, logout } from "./auth-operations";

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signup.pending, state => {
              handlePending(state);
            })
            .addCase(signup.fulfilled, (state, { payload }) => {
              const { user, token } = payload;
              state.isLoading = false;
              state.user = user;
              state.token = token;
              state.isLogin = true;
            })
            .addCase(signup.rejected, (state, { payload }) => {
              handleRejected(state, payload);
            })
            .addCase(login.pending, state => {
              handlePending(state);
            })
            .addCase(login.fulfilled, (state, { payload }) => {
              const { user, token } = payload;
              state.isLoading = false;
              state.user = user;
              state.token = token;
              state.isLogin = true;
            })
            .addCase(login.rejected, (state, { payload }) => {
              handleRejected(state, payload);
            })
            .addCase(current.pending, state => {
              handlePending(state);
              console.log('pending=>', state.token)
            })
            .addCase(current.fulfilled, (state, { payload }) => {
              const user = payload;
              state.isLoading = false;
              state.user = user;
              state.isLogin = true;
              console.log('fulfilled=>', state.token)
            })
            .addCase(current.rejected, (state, { payload }) => {
              handleRejected(state, payload);
              console.log('rejected=>', state.token)
            })
            .addCase(updateUser.pending, state => {
              handlePending(state);
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
              const user = payload;
              state.isLoading = false;
              state.user = user;
              state.isLogin = true;
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
              handleRejected(state, payload);
            })
            .addCase(logout.pending, state => {
              handlePending(state);
            })
            .addCase(logout.fulfilled, state => {
              state.isLoading = false;
              state.user = {};
              state.token = '';
              state.isLogin = false;
            })
            .addCase(logout.rejected, (state, { payload }) => {
              handleRejected(state, payload);
            });
    }
})

export default authSlice.reducer;