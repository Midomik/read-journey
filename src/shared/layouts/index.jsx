import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from '../../features/redux/auth/operations';
import {
  selectBooksLoading,
  selectIsOpenAddToLibraryModal,
  selectIsOpenBurgerMenu,
  selectIsOpenEndBookModal,
  selectIsOpenStartReadingModal,
  selectisOpenSuccAddModal,
} from '../../features/redux/books/selectors';
import { Modal } from '../ui/Modal';
import {
  selectAuthLoading,
  selectUserData,
} from '../../features/redux/auth/selectors';
import { BurgerMenuIcon } from '../assets/icons/BurgerMenuIcon';
import { CloseIcon } from '../assets/icons/CloseIcon';
import { useEffect } from 'react';
import {
  closeModals,
  setIsOpenBurgerMenu,
} from '../../features/redux/books/reducer';
import { Loader } from '../ui/Loader/Loader';
import { getOwnBooks } from '../../features/redux/books/operations';

export const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();

  const isOpenSuccAddModal = useSelector(selectisOpenSuccAddModal);
  const isOpenAddToLibraryModal = useSelector(selectIsOpenAddToLibraryModal);
  const isOpenStartReadingModal = useSelector(selectIsOpenStartReadingModal);
  const isOpenEndBookModal = useSelector(selectIsOpenEndBookModal);
  const isOpenBurgerMenu = useSelector(selectIsOpenBurgerMenu);
  const isAuthLoading = useSelector(selectAuthLoading);
  const isBooksLoading = useSelector(selectBooksLoading);
  const userData = useSelector(selectUserData);

  const closeModal = () => {
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

  useEffect(() => {
    window.addEventListener('keydown', closeModalFromEsc);
    return () => {
      window.removeEventListener('keydown', closeModalFromEsc);
    };
  }, []);

  useEffect(() => {
    dispatch(getOwnBooks());
  }, [dispatch]);

  return (
    <div>
      <header className="mb-[16px] flex items-center justify-between rounded-[15px] bg-gray-1f p-[16px]">
        <Logo />

        <nav className=" flex gap-[40px] text-[16px] text-gray-68 mobile-sm:hidden tablet:flex">
          <NavLink className="relative" to="/">
            Home
          </NavLink>
          <NavLink className="relative" to="/library">
            My library
          </NavLink>
        </nav>

        <div className=" flex items-center text-[16px] mobile-sm:gap-[10px]  tablet:gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center justify-center rounded-full border bg-gray-26 text-[16px] mobile-sm:h-[35px] mobile-sm:w-[35px] tablet:h-[40px] tablet:w-[40px]">
              {userData?.name[0]}
            </div>
            <p className="mobile-sm:hidden tablet:hidden desktop:block">
              {userData?.name}
            </p>
          </div>
          <Button
            size="small"
            className=" mobile-sm:hidden tablet:block tablet:h-[42px] tablet:px-[28px] tablet:py-[12px] tablet:text-[16px]"
            onClick={() => dispatch(logOutThunk())}
          >
            Log out
          </Button>
          <div
            onClick={() => dispatch(setIsOpenBurgerMenu())}
            className="mobile-sm:block tablet:hidden"
          >
            <BurgerMenuIcon />
          </div>
        </div>
      </header>
      <main>{children}</main>

      {isOpenAddToLibraryModal && <Modal size="large" />}
      {isOpenStartReadingModal && <Modal size="large" />}

      {isOpenSuccAddModal && <Modal variant="succAdd" size="small" />}
      {isOpenEndBookModal && <Modal variant="endBook" size="small" />}

      {isOpenBurgerMenu && (
        <div
          onClick={closeFromOverlay}
          className="fixed left-0 top-0 h-[100vh] w-[100vw] bg-[#14141499]"
        >
          <div className="absolute right-0 top-0 flex h-full max-h-screen w-1/2 max-w-lg  transform flex-col justify-center overflow-hidden overflow-y-auto bg-gray-1f transition-all">
            <button
              onClick={closeModal}
              className="absolute right-[47px] top-[41px]  border-none bg-transparent"
            >
              <CloseIcon />
            </button>

            <nav className="mx-auto flex gap-[24px] text-[16px] text-gray-68 mobile-sm:flex-col tablet:flex">
              <NavLink
                onClick={closeModal}
                className="relative self-start"
                to="/"
              >
                Home
              </NavLink>
              <NavLink onClick={closeModal} className="relative" to="/library">
                My library
              </NavLink>
            </nav>

            <Button
              size="small"
              className="absolute bottom-[50px] left-[50%] translate-x-[-50%] "
              onClick={() => dispatch(logOutThunk())}
            >
              Log out
            </Button>
          </div>
        </div>
      )}

      {isAuthLoading && <Loader />}
      {isBooksLoading && <Loader />}
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
