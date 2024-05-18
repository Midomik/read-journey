import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';
// import Notiflix from 'notiflix';

export const getRecomendedMovies = createAsyncThunk(
  'movies/getRecomended',
  async (quantity, thunkAPI) => {
    try {
      const res = await instance.get(
        `/drinks/mainpage?drinksPerCategory=${quantity}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
