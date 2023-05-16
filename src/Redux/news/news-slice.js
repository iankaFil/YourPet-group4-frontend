import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './news-operations';

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
  state.items = action.payload.news;
  state.totalPages = action.payload.totalPages;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => handlePending(state))
      .addCase(fetchNews.fulfilled, (state, action) =>
        handleFulfilled(state, action)
      )
      .addCase(fetchNews.rejected, (state, action) =>
        handleRejected(state, action)
      );
  },
});

export const newsReducer = newsSlice.reducer;
