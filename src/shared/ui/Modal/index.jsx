import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModals,
  setIsOpenStartReadingModal,
} from '../../../features/redux/books/reducer';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import thumbsUp from '../../assets/images/png/thumbs-up-img.png';
import booksBig from '../../assets/images/png/books-img-big.png';
import {
  selectIsOpenAddToLibraryModal,
  selectIsOpenStartReadingModal,
  selectModalData,
  selectOwnBooks,
} from '../../../features/redux/books/selectors';
import { Button } from '../Button';
import { addFromRecomend } from '../../../features/redux/books/operations';
import { useNavigate } from 'react-router-dom';
import bookPlaceholder from '../../assets/images/png/book-placeholder.png';
import { Notify } from 'notiflix';

export const Modal = ({ className, variant = 'default', size = 'small' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalData = useSelector(selectModalData);
  const ownBooks = useSelector(selectOwnBooks);
  const isOpenStartReadingModal = useSelector(selectIsOpenStartReadingModal);
  const isOpenAddToLibraryModal = useSelector(selectIsOpenAddToLibraryModal);

  const closeModal = () => {
    dispatch(closeModals());
    document.body.classList.remove('add-overflov');
  };

  const closeFromOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const closeModalFromEsc = (e) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const addToLibrary = (modalData) => {
    const isBookInLibrary = ownBooks.some(
      (book) => book?.title === modalData?.title
    );

    if (isBookInLibrary) {
      return Notify.failure(`Error! This book is already in your library`, {
        timeout: 3000,
      });
    }

    dispatch(addFromRecomend(modalData?._id));
    closeModal();
  };

  const redirectToReading = (id) => {
    dispatch(setIsOpenStartReadingModal());
    navigate(`/reading/${id}`);
    closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalFromEsc);
    return () => {
      window.removeEventListener('keydown', closeModalFromEsc);
    };
  }, []);

  const succAddVariant = (
    <>
      <img
        src={thumbsUp}
        alt="good image"
        className="mb-[32px] h-[70px] w-[70px]"
      />
      <h3 className="mb-[14px] font-[700] leading-[100%] ">Good Job</h3>
      <p className="spa text-center leading-[129%] tracking-[-0.02em] text-gray-68">
        Your book is now in <span className="text-white">the library!</span> The
        joy knows no bounds and now you can start your training
      </p>
    </>
  );

  const defaultVariant = (
    <>
      <img
        src={modalData?.imageUrl ? modalData?.imageUrl : bookPlaceholder}
        alt={modalData?.title}
        className="mb-[16px] h-[213px] w-[153px] rounded-[8px]"
      />
      <h3 className="mb-[2px] font-[700] leading-[100%] mobile-sm:text-[18px] tablet:text-[20px] ">
        {modalData?.title}
      </h3>
      <p className="mb-[4px] leading-[129%] text-gray-68  mobile-sm:text-[12px] tablet:text-[14px]">
        {modalData?.author}
      </p>
      <p className="mb-[32px] text-[10px] leading-[120%]">
        {modalData?.totalPages} pages
      </p>
      {isOpenStartReadingModal && (
        <Button onClick={() => redirectToReading(modalData?._id)}>
          Start reading
        </Button>
      )}

      {isOpenAddToLibraryModal && (
        <Button onClick={() => addToLibrary(modalData)}>Add to library</Button>
      )}
    </>
  );

  const bookAlreadyRead = (
    <>
      <img
        src={booksBig}
        alt="the book was read"
        className="mb-[32px] h-[70px] w-[70px]"
      />
      <h3 className="mb-[14px] font-[700] leading-[100%] ">The book is read</h3>
      <p className="spa text-center leading-[129%] tracking-[-0.02em] text-gray-68">
        It was an <span className="text-white">exciting journey</span>, where
        each page revealed new horizons, and the characters became inseparable
        friends.
      </p>
    </>
  );

  return (
    <div
      onClick={closeFromOverlay}
      className="fixed left-0 top-0 z-[50] h-[100vh] w-[100vw] bg-[#14141499]"
    >
      <div
        className={` absolute left-[50%] top-[50%] box-border flex mobile-sm:w-[335px]    ${size === 'small' ? 'min-h-[290px] w-[342px] ' : 'min-h-[400px] w-[500px] tablet:min-h-[400px] tablet:w-[500px]'} translate-x-[-50%] translate-y-[-50%] flex-col items-center overflow-y-auto rounded-[12px] bg-gray-1f p-[50px] ${className}`}
      >
        <button
          onClick={closeModal}
          className="absolute right-[16px] top-[16px] border-none bg-transparent"
        >
          <CloseIcon />
        </button>
        {variant === 'succAdd' && succAddVariant}
        {variant === 'default' && defaultVariant}
        {variant === 'endBook' && bookAlreadyRead}
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};
