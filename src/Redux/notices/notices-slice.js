import { createSlice } from '@reduxjs/toolkit';
import { fetchNoticesByTitle } from './notices-operations';

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
  extraReducers: builder => {
    builder
      .addCase(fetchNoticesByTitle.pending, state => handlePending(state))
      .addCase(fetchNoticesByTitle.fulfilled, (state, action) =>
        handleFulfilled(state, action)
      )
      .addCase(fetchNoticesByTitle.rejected, (state, action) =>
        handleRejected(state, action)
      );
  },
});

export const noticesReducer = noticesSlice.reducer;
