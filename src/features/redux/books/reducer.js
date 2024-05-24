import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addFromLibrary,
  addFromRecomend,
  deleteOwnBook,
  deleteReading,
  finishReading,
  getBookById,
  getOwnBooks,
  getRecomendedBooks,
  startReading,
} from './operations.js';

const initialState = {
  books: [],
  pageData: null,
  bookData: null,
  modalData: null,
  modalVariants: {
    isOpenAddToLibraryModal: false,
    isOpenStartReadingModal: false,
    isOpenSuccAddModal: false,
  },
  isLoading: false,
  error: null,
  ownBooks: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // setIsOpenModal: (state, { payload }) => {
    //   state.isOpenModal = !state.isOpenModal;
    //   state.modalData = payload;
    //   state.modalVariants.isOpenStartReadingModal = false;
    // },
    setIsOpenAddToLibraryModal: (state, { payload }) => {
      state.modalVariants.isOpenAddToLibraryModal = true;
      state.modalData = payload;
    },
    setIsOpenStartReadingModal: (state, { payload }) => {
      state.isOpenModal = !state.isOpenModal;
      state.modalVariants.isOpenStartReadingModal =
        !state.modalVariants.isOpenStartReadingModal;
      state.modalData = payload;
    },
    closeModals: (state) => {
      state.modalVariants.isOpenSuccAddModal = false;
      state.modalVariants.isOpenAddToLibraryModal = false;
      state.modalVariants.isOpenStartReadingModal = false;
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

        // state.ownBooks.push(payload);
        state.modalVariants.isOpenSuccAddModal = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnBooks.fulfilled, (state, { payload }) => {
        // console.log(payload);

        state.ownBooks = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteOwnBook.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.ownBooks = state.ownBooks.filter((book) => book._id !== payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFromLibrary.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.ownBooks.push(payload);
        state.modalVariants.isOpenSuccAddModal = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getBookById.fulfilled, (state, { payload }) => {
        state.bookData = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(startReading.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.bookData = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(finishReading.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.bookData = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteReading.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.bookData = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getRecomendedBooks.pending,
          addFromRecomend.pending,
          getOwnBooks.pending,
          deleteOwnBook.pending,
          addFromLibrary.pending,
          getBookById.pending,
          startReading.pending,
          finishReading.pending,
          deleteReading.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          getRecomendedBooks.rejected,
          addFromRecomend.rejected,
          getOwnBooks.rejected,
          deleteOwnBook.rejected,
          addFromLibrary.rejected,
          getBookById.rejected,
          startReading.rejected,
          finishReading.rejected,
          deleteReading.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const booksReducer = booksSlice.reducer;
export const {
  setIsOpenAddToLibraryModal,
  closeModals,
  setIsOpenStartReadingModal,
} = booksSlice.actions;
