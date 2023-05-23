import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getUserFavoritesNotices,
  getUserNotices,
  // addToFavorite
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

      console.log(' ПАРАМЕТРЫ ЗАПРОСА В fetchNoticesByTitle', params);

      const response = await instance.get(`/notices/${category}`, {
        params,
      });
      // console.log('UUUUUUUUUTTTTTTTTT', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchAddToFavorite = createAsyncThunk(
//   'user/addFavorite',
//   async (id, thunkAPI) => {
//     console.log("ID", id)
//      try {
//       // getToken.set(value);
       
//       const result = await addToFavorite(id);
//       return result;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const fetchFavotiteNotices = createAsyncThunk(
  'notices/favorites',
  async (_, thunkAPI) => {
    try {
      const response = await getUserFavoritesNotices();
      // console.log('UUUUUUUUUTTTTTTTTT', response.favorite);
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
      console.log('UUUUUUUUUTTTTTTTTT', response.notices);
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
