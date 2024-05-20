import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../features/redux/auth/operations';

export const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();

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
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
