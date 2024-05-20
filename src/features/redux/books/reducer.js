import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getRecomendedBooks } from './operations.js';

const initialState = {
  pageData:null,
  searchQuery: '',
  books: [],
  //   favoriteDrinks: [],
  isLoading: false,
  error: null,
  //   ownDrinks: [],
  //   page: 1,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRecomendedBooks.fulfilled, (state, { payload }) => {
        console.log(payload);
        
        state.pageData = payload;
        state.books = payload.results;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(getRecomendedBooks.pending), (state) => {
        state.isLoading = true;
      })

      .addMatcher(isAnyOf(getRecomendedBooks.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const booksReducer = booksSlice.reducer;
export const { setPage } = booksSlice.actions;
