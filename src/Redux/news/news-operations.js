import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://your-pets-rest-api.onrender.com',
});

export const fetchNews = createAsyncThunk(
  'news/all',
  async ({ searchQuery, page }, thunkAPI) => {
    try {
      const response = await instance.get('/news', {
        params: {
          q: searchQuery,
          page,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
