import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  closeNotifyModals,
  setIsOpenModal,
} from '../../../features/redux/books/reducer';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import thumbsUp from '../../assets/images/png/thumbs-up-img.png';

export const Modal = ({ children, className, variant }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    !variant ? dispatch(setIsOpenModal()) : dispatch(closeNotifyModals());
    // document.body.classList.remove('add-overflov');
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

  useEffect(() => {
    window.addEventListener('keydown', closeModalFromEsc);
    return () => {
      window.removeEventListener('keydown', closeModalFromEsc);
    };
  }, []);

  const succAddToLibrary = (
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
        {variant === 'succAdd' && succAddToLibrary}
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
};
