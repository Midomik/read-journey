import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from '../../features/redux/auth/operations';
import {
  selectIsOpenAddToLibraryModal,
  selectIsOpenStartReadingModal,
  selectisOpenSuccAddModal,
} from '../../features/redux/books/selectors';
import { Modal } from '../ui/Modal';

export const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();

  const isOpenAddToLibraryModal = useSelector(selectIsOpenAddToLibraryModal);
  const isOpenSuccAddModal = useSelector(selectisOpenSuccAddModal);
  const isOpenStartReadingModal = useSelector(selectIsOpenStartReadingModal);

  return (
    <div>
      <header className="mb-[16px] flex items-center justify-between rounded-[15px] bg-gray-1f p-[16px]">
        <Logo />

        <nav className="flex gap-[40px] text-[16px] text-gray-68">
          <NavLink className="relative" to="/">
            Home
          </NavLink>
          <NavLink className="relative" to="/library">
            My library
          </NavLink>
        </nav>

        <div className=" flex items-center gap-[16px] text-[16px]">
          <div className="flex items-center gap-[8px]">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border bg-gray-26 text-[16px]">
              Y
            </div>
            <p>Yurii Novosad</p>
          </div>
          <Button onClick={() => dispatch(logOutThunk())}>Log out</Button>
        </div>
      </header>
      <main>{children}</main>

      {isOpenAddToLibraryModal && <Modal />}
      {isOpenStartReadingModal && <Modal />}

      {isOpenSuccAddModal && (
        <Modal
          variant="succAdd"
          className="min-h-[290px] w-[342px] justify-center"
        />
      )}
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
