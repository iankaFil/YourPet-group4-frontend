import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

export const fetchNews = createAsyncThunk(
  'news/all',
  async ({ searchQuery, page }, thunkAPI) => {
    try {
      console.log(searchQuery);
      console.log(page);
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
