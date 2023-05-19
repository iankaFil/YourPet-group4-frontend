import { createSlice } from '@reduxjs/toolkit';

import { AddToFavorite, deleteFromFavorite } from './user-operation';
// import { getCurrent } from 'Shared/api/auth-api';

const userInitialState = {
  user: {},
  userName: '',
  pets: null,
  image: '',
  notices: [],
  favorite: [],
  error: null,
  isLoading: false,
};

// function UserFulfilled(state, { payload }) {
//   state.user = payload;
//   state.userName = payload.name;
//   state.pets = payload.pets;
//   state.image = payload.image;
//   state.favorite = payload.favorite;
//   state.isLoading = false;
//   state.error = null;
// }

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      //   .addCase(getCurrent.pending, state => {
      //     state.isLoading = true;
      //   })
      //   .addCase(getCurrent.fulfilled, UserFulfilled)
      //   .addCase(getCurrent.rejected, (state, { payload }) => {
      //     state.error = payload;
      //   })
      .addCase(AddToFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(AddToFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorite = payload;
        state.error = null;
      })
      .addCase(AddToFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload.message;
      })
      .addCase(deleteFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (Array.isArray(state.favorite)) {
          state.favorite = state.favorite.filter(id => id !== payload.id);
        }
      })
      .addCase(deleteFromFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const userReduser = userSlice.reducer;
