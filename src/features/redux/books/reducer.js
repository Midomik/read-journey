import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addFromRecomend, getRecomendedBooks } from './operations.js';

const initialState = {
  pageData: null,
  searchQuery: '',
  books: [],
  //   favoriteDrinks: [],
  modalData: null,
  isOpenModal: false,
  modalVariants: {
    isOpenSuccAddModal: false,
  },
  isLoading: false,
  error: null,
  //   ownDrinks: [],
  //   page: 1,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setIsOpenModal: (state, { payload }) => {
      state.isOpenModal = !state.isOpenModal;
      state.modalData = payload;
    },
    closeNotifyModals: (state) => {
      state.modalVariants.isOpenSuccAddModal = false;
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
      .addCase(addFromRecomend.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.modalVariants.isOpenSuccAddModal = true;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(getRecomendedBooks.pending, addFromRecomend.pending),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(getRecomendedBooks.rejected, addFromRecomend.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const booksReducer = booksSlice.reducer;
export const { setIsOpenModal, closeNotifyModals } = booksSlice.actions;
