export const selectBooks = (state) => state.library.books;

export const selectPageData = (state) => state.library.pageData;

export const selectIsLoading = (state) => state.library.isLoading;

export const selectModalData = (state) => state.library?.modalData;

export const selectisOpenSuccAddModal = (state) =>
  state.library.modalVariants.isOpenSuccAddModal;

export const selectIsOpenStartReadingModal = (state) =>
  state.library.modalVariants.isOpenStartReadingModal;

export const selectIsOpenAddToLibraryModal = (state) =>
  state.library.modalVariants.isOpenAddToLibraryModal;

export const selectOwnBooks = (state) => state.library.ownBooks;

export const selectBookData = (state) => state.library.bookData;
