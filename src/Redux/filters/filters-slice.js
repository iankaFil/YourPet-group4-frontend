import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {},
  reducers: {
    setFilter: (state, action) => {
      const { filterName, filterValue } = action.payload;
      state[filterName] = filterValue;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
