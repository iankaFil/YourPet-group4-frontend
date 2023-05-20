import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../Shared/api/pets-api';

export const fetchOwnPets = createAsyncThunk(
  'pets/fetch-own-pets',
  async (_, thunkAPI) => {
    try {
      // const {pets} = await api.getOwnPets();
      // console.log("RESULT fetchOwnPets=>", pets)
      // return pets;
      const result = await api.getOwnPets();
      // console.log("RESULT fetchOwnPets=>", result)
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddPet = createAsyncThunk(
  'pets/add-pet',
  async (data, thunkAPI) => {
    try {
      const result = await api.addPet(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchDeletePet = createAsyncThunk(
  'pets/delete-pet',
  async (id, thunkAPI) => {
    try {
      await api.deletePet(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);