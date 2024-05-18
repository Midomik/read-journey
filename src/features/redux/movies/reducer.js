import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getRecomendedMovies } from './operations.js';

const initialState = {
  searchQuery: '',
  movies: [],
  //   favoriteDrinks: [],
  isLoading: false,
  error: null,
  //   ownDrinks: [],
  //   page: 1,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRecomendedMovies.fulfilled, (state, action) => {
        state.mainPageDrinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(getRecomendedMovies.pending), (state) => {
        state.isLoading = true;
      })

      .addMatcher(isAnyOf(getRecomendedMovies.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const moviesReducer = moviesSlice.reducer;
export const { setPage } = moviesSlice.actions;
