import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://your-pets-rest-api.onrender.com/',
});

export const fetchNews = createAsyncThunk(
  'news/all',
  async (page, thunkAPI) => {
    try {
      const response = await instance.get('/news', {
        params: {
          page: page,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSearchNews = createAsyncThunk(
  'news/search',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.get(`/news/search?q=${credentials}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
