import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNoticesByTitle,
  fetchNoticesByCategory,
  fetchFavotiteNotices,
  fetchUserNotices,
  fetchAddToFavorite,
  // fetchNoticesById
} from './notices-operations';

const initialState = {
  items: [],
  favorite: [],
  totalPages: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload.notices;
  state.totalPages = action.payload.totalPages;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    resetCategoryItem(state) {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNoticesByTitle.pending, state => {
        state.items = [];
        handlePending(state);
      })
      .addCase(fetchNoticesByTitle.fulfilled, (state, action) => {
        handleFulfilled(state, action);
      })
      .addCase(fetchNoticesByTitle.rejected, (state, action) => {
        handleRejected(state, action);
      })

      .addCase(fetchAddToFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAddToFavorite.fulfilled, (state, action) => {
        console.log('PAYLLLLLLLLLLLLL', action.payload.id);
        state.isLoading = false;
        state.favorite.push(action.payload.id);
        state.error = null;
      })
      .addCase(fetchAddToFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload.message;
      })

      .addCase(fetchFavotiteNotices.pending, state => {
        state.items = [];
        handlePending(state);
      })
      .addCase(fetchFavotiteNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchFavotiteNotices.rejected, (state, action) => {
        handleRejected(state, action);
      })

      .addCase(fetchUserNotices.pending, state => {
        state.items = [];
        handlePending(state);
      })
      .addCase(fetchUserNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUserNotices.rejected, (state, action) => {
        handleRejected(state, action);
      })

      .addCase(fetchNoticesByCategory.pending, state => {
        state.items = [];
        handlePending(state);
      })
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        handleFulfilled(state, action);
      })
      .addCase(fetchNoticesByCategory.rejected, (state, action) => {
        handleRejected(state, action);
      });

    // .addCase(fetchNoticesById.pending, state => handlePending(state))
    // .addCase(fetchNoticesById.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.items = action.payload.notice;
    //   state.totalPages = action.payload.totalPages;
    // })
    // .addCase(fetchNoticesById.rejected, (state, action) =>
    //   handleRejected(state, action)
    // );
  },
});

export const noticesReducer = noticesSlice.reducer;
