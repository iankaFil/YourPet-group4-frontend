import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  deleteNotice,
  getUserFavoritesNotices,
  getUserNotices
} from 'Shared/api/notices-api';

export const instance = axios.create({
  baseURL: 'https://your-pets-rest-api.onrender.com/notices',
});

export const fetchNoticesByTitle = createAsyncThunk(
  'notices/search',
  async ({ category, searchQuery, page, gender, age }, thunkAPI) => {
    try {
      const params = {
        q: searchQuery,
        page,
        gender,
        age,
      };
      const response = await instance.get(`/notices/${category}`, {
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavotiteNotices = createAsyncThunk(
  'notices/favorites',
  async (_, thunkAPI) => {
    try {
      const response = await getUserFavoritesNotices();
      return response.favorite;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserNotices = createAsyncThunk(
  'notices/user-notices',
  async (_, thunkAPI) => {
    try {
      const response = await getUserNotices();
      return response.notices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/category',
  async (category, thunkAPI) => {
    try {
      const response = await instance.get(`/notices/${category}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesById = createAsyncThunk(
  'notices/search',
  async (noticeId, thunkAPI) => {
    try {
      const response = await instance.get(`/notices/search/${noticeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteNotice = createAsyncThunk(
  'notices/delete-notice',
  async (id, thunkAPI) => {
    try {
      await deleteNotice(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);