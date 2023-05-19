import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'Shared/api/auth-api';

import { getToken } from 'Redux/auth/auth-selectors';

export const AddToFavorite = createAsyncThunk(
  'user/addFavorite',
  async (id, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.token;
      if (value === null) {
        return rejectWithValue('Unable to fetch user');
      }
      getToken.set(value);
      const { data } = await instance.post(`/user/favorite/${id}`);
      return data.user.favorite;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'user/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/user/favorite/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
