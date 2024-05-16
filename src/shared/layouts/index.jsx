import { NavLink } from 'react-router-dom';
import { LogoIcon } from '../assets/icons/LogoIcon';
import PropTypes from 'prop-types';
import { Button } from '../ui/Button';

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-1f mb-[16px] flex items-center justify-between rounded-[15px] p-[16px]">
        <div className="flex items-center gap-[4px]">
          <LogoIcon />
          <p className="text-[18px] font-[700] ">READ JOURNAY</p>
        </div>

        <nav className="text-gray-68 flex gap-[40px] text-[16px]">
          <NavLink className="relative" to="/">
            Home
          </NavLink>
          <NavLink className="relative" to="/library">
            My library
          </NavLink>
        </nav>

        <div className=" flex items-center gap-[16px] text-[16px]">
          <div className="flex items-center gap-[8px]">
            <div className="bg-gray-26 flex h-[40px] w-[40px] items-center justify-center rounded-full border text-[16px]">
              Y
            </div>
            <p>Yurii Novosad</p>
          </div>
          <Button onClick={() => console.log(12212)}>Log out</Button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
