export const selectIsLoading = state => state.friends?.isLoading;
export const selectError = state => state.friends?.error;
export const selectFriends = state => state.friends?.items ?? [];