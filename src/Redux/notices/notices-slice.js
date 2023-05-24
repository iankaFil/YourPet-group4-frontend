import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNoticesByTitle,
  fetchNoticesByCategory,
  fetchFavotiteNotices,
  fetchUserNotices,
  fetchDeleteNotice,
} from './notices-operations';

const initialState = {
  items: [], 
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
      })
      .addCase(fetchDeleteNotice.pending, state => {
        handlePending(state);
      })
      .addCase(fetchDeleteNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id !== payload);
        state.items.splice(index, 1);
      })
      .addCase(fetchDeleteNotice.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
