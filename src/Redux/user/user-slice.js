import { createSlice } from '@reduxjs/toolkit';

import { addToFavorite, deleteFromFavorite, current } from './user-operation';
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

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder

      .addCase(current.pending, state => {
        handlePending(state);
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        console.log(' USERRRRRRRRRRRRRRRRR^^^^^', payload);
        const user = payload;
        state.isLoading = false;
        state.user = user;
        state.isLogin = true;
      })
      .addCase(current.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })

      .addCase(addToFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        console.log('PAYLLLLLLLLLLLLL', action.payload);
        state.isLoading = false;
        state.favorite.push(action.payload.id);
        state.error = null;
      })
      .addCase(addToFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload.message;
      })

      .addCase(deleteFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (Array.isArray(state.favorite)) {
          state.favorite = state.favorite.filter(id => id !== payload.id);
          console.log(' STATE FAVORITEEEE', state.favorite);
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
