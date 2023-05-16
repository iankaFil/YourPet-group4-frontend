import { createSlice } from '@reduxjs/toolkit';
import { fetchOurFriends } from './ourFriends-operations';

const initialState = {
  friends: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchOurFriends.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOurFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.friends = action.payload;
      })
      .addCase(fetchOurFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
