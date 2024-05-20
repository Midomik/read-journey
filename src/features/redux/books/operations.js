import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';
// import Notiflix from 'notiflix';

export const getRecomendedBooks = createAsyncThunk(
  'books/recommend',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/books/recommend`, {
        params: data,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
