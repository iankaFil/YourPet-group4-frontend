import { createSlice } from '@reduxjs/toolkit';
import { fetchOurFriends } from './ourFriends-operations';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};
const handleFulfilled = (state, action) => {
    state.isLoading = false;
    state.items = action.payload;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchOurFriends.pending, state => handlePending(state))
            .addCase(fetchOurFriends.fulfilled, (state, action) =>
                handleFulfilled(state, action)
            )
            .addCase(fetchOurFriends.rejected, (state, action) =>
                handleRejected(state, action)
            );
    },
});

export const friendsReducer = friendsSlice.reducer;
