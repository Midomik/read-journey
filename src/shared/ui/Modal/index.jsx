import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModals,
  setIsOpenStartReadingModal,
} from '../../../features/redux/books/reducer';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import thumbsUp from '../../assets/images/png/thumbs-up-img.png';
import {
  selectIsOpenAddToLibraryModal,
  selectIsOpenStartReadingModal,
  selectModalData,
} from '../../../features/redux/books/selectors';
import { Button } from '../Button';
import { addFromRecomend } from '../../../features/redux/books/operations';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ className, variant = 'default' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalData = useSelector(selectModalData);
  const isOpenStartReadingModal = useSelector(selectIsOpenStartReadingModal);
  const isOpenAddToLibraryModal = useSelector(selectIsOpenAddToLibraryModal);

  const closeModal = () => {
    // !variant ? dispatch(setIsOpenModal()) : dispatch(closeNotifyModals());
    // document.body.classList.remove('add-overflov');
    dispatch(closeModals());
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

  const addToLibrary = (id) => {
    dispatch(addFromRecomend(id));
    closeModal();
  };

  const redirectToReading = (id) => {
    dispatch(setIsOpenStartReadingModal());
    navigate(`/reading/${id}`);
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
        src={modalData?.imageUrl}
        alt={modalData?.title}
        className="mb-[16px] h-[213px] w-[153px] rounded-[8px]"
      />
      <h3 className="mb-[2px] text-[20px] font-[700] leading-[100%] ">
        {modalData?.title}
      </h3>
      <p className="mb-[4px] leading-[129%] text-gray-68">
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
        <Button onClick={() => addToLibrary(modalData?._id)}>
          Add to library
        </Button>
      )}
    </>
  );

  return (
    <div
      onClick={closeFromOverlay}
      className="fixed left-0 top-0 h-[100vh] w-[100vw] bg-[#14141499]"
    >
      <div
        className={`absolute left-[50%] top-[50%] box-border flex max-h-full min-h-[400px] w-full max-w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col items-center overflow-y-auto rounded-[12px] bg-gray-1f p-[50px] ${className}`}
      >
        <button
          onClick={closeModal}
          className="absolute right-[16px] top-[16px] border-none bg-transparent"
        >
          <CloseIcon />
        </button>
        {variant === 'succAdd' && succAddVariant}
        {variant === 'default' && defaultVariant}
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
};
