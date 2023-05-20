import { createSlice } from '@reduxjs/toolkit';

import {
    fetchOwnPets,
    fetchAddPet,
    fetchDeletePet, 
} from './pets-operations';

const initialState = {
  pets: [],
  user: {},
  loading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchOwnPets.pending, state => {
        handlePending(state);
      })
      .addCase(fetchOwnPets.fulfilled, (state, { payload }) => {
        state.loading = false;
        // console.log("PAYLOAD", payload)
        state.pets = payload.pets;
        state.user = payload.user;
      })
      .addCase(fetchOwnPets.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(fetchAddPet.pending, state => {
        handlePending(state);
      })
      .addCase(fetchAddPet.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.pets.push(payload);
      })
      .addCase(fetchAddPet.rejected, (state, { payload }) => {
       handleRejected(state, payload);
      })
      .addCase(fetchDeletePet.pending, state => {
        handlePending(state);
      })
      .addCase(fetchDeletePet.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.pets.findIndex(pet => pet.id === payload);
        state.pets.splice(index, 1);
      })
      .addCase(fetchDeletePet.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      });
  },
});

export const petsReducer = petsSlice.reducer;