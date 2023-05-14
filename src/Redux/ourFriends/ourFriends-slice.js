import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOurFriends } from './ourFriends-operations';

export const fetchOurFriendsAsync = createAsyncThunk(
    'ourFriends/fetchOurFriends',
    async () => {
        const response = await fetchOurFriends();
        return response.data;
    }
);
const initialState = {
    friends: [],
    isLoading: false,
    error: null,
};

// const handlePending = state => {
//     state.isLoading = true;
//     state.error = null;
// };
// const handleFulfilled = (state, action) => {
//     state.isLoading = false;
//     state.items = action.payload;
// };
// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

const friendsSlice = createSlice({
    name: 'ourFriends',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchOurFriendsAsync.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchOurFriendsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })

            .addCase(fetchOurFriendsAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export const friendsReducer = friendsSlice.reducer;
