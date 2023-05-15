import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../Shared/api/auth-api";

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      console.log(' ОТВЕТ от функции createAsyncThunk', result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
    "auth/login",
    async(data, {rejectWithValue}) => {
        try {
          const result = await api.login(data);
          console.log(' ОТВЕТ от функции createAsyncThunk', result);
            return result;
        }
        catch({response}) {
            return rejectWithValue(response);
        }
    }
)

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      console.log(' ОТВЕТ CURRENT от функции createAsyncThunk', data);

      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (data, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const updatedUser = await api.updateUser(auth.token, data);
      console.log(' ОТВЕТ от функции createAsyncThunk', data);

      return updatedUser;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      console.log(' ОТВЕТ LOGOUT от функции createAsyncThunk', data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);