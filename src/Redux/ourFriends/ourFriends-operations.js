import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://your-pets-rest-api.onrender.com/',
});

export const fetchOurFriends = createAsyncThunk(
    'friends',
    async (credentials, thunkAPI) => {

        try {
            const response = await instance.get('/sponsors', credentials);
            console.log(response);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);

        }

    }

);

