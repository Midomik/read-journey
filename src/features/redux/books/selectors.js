export const selectBooks = (state) => state.library.books;

export const selectPageData = (state) => state.library.pageData;

export const selectIsLoading = (state) => state.library.isLoading;

export const selectIsOpenModal = (state) => state.library.isOpenModal;

export const selectModalData = (state) => state.library?.modalData;

export const selectisOpenSuccAddModal = (state) =>
  state.library.modalVariants.isOpenSuccAddModal;
