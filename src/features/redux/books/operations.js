import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';
import { Notify } from 'notiflix';
// import Notiflix from 'notiflix';

export const getRecomendedBooks = createAsyncThunk(
  'books/recommend',
  async (data, thunkAPI) => {
    try {
      console.log(data);

      const res = await instance.get(`/books/recommend`, {
        params: data,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFromRecomend = createAsyncThunk(
  'books/addFromRecomend',
  async (id, thunkAPI) => {
    try {
      const res = await instance.post(`/books/add/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnBooks = createAsyncThunk(
  'books/getOwnBooks',
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(
        `/books/own/?${data ? `status=${data}` : ''}`
      );
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOwnBook = createAsyncThunk(
  'books/deleteOwnBook',
  async ({ id }, thunkAPI) => {
    try {
      console.log(id);

      const res = await instance.delete(`/books/remove/${id}`);
      console.log(res);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFromLibrary = createAsyncThunk(
  'books/addFromLibrary',
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post(`/books/add`, formData);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBookById = createAsyncThunk(
  'books/getBookById',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/books/${id}`);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const startReading = createAsyncThunk(
  'books/startReading',
  async (readingData, thunkAPI) => {
    try {
      const { data } = await instance.post(`/books/reading/start`, readingData);
      console.log(data);
      return data;
    } catch (error) {
      error.response.status === 409
        ? Notify.failure(
            `Error! This book is already read or you haven't finished reading this book`,
            {
              timeout: 3000,
            }
          )
        : null;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const finishReading = createAsyncThunk(
  'books/finishReading',
  async (readingData, thunkAPI) => {
    try {
      const { data } = await instance.post(
        `/books/reading/finish`,
        readingData
      );
      console.log(data);
      return data;
    } catch (error) {
      error.response.status === 409
        ? Notify.failure(
            `Error! This book is already read or you haven't finished reading this book`,
            {
              timeout: 3000,
            }
          )
        : null;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReading = createAsyncThunk(
  'books/deleteReading',
  async (readingData, thunkAPI) => {
    try {
      console.log(readingData);

      const { data } = await instance.delete(
        `/books/reading/?bookId=${readingData.bookId}&readingId=${readingData.readingId}`
      );
      console.log(data);
      return data;
    } catch (error) {
      error.response.status === 409
        ? Notify.failure(
            `Error! This book is already read or you haven't finished reading this book`,
            {
              timeout: 3000,
            }
          )
        : null;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
