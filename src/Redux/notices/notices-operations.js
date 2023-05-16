import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://your-pets-rest-api.onrender.com',
});

export const fetchNoticesByTitle = createAsyncThunk(
  'notices/search',
  async (category, thunkAPI) => {
    try {
      const response = await instance.get(`/notices/search/${category}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
