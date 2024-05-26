import { Link } from 'react-router-dom';
import { LogoIcon } from '../../assets/icons/LogoIcon';
import PropTypes from 'prop-types';

export const Logo = ({ className, ...rest }) => {
  return (
    <Link to="/" className={`flex items-center gap-[4px] ${className}`}>
      <LogoIcon />
      <p
        className="text-[18px] font-[700] mobile-sm:hidden tablet:block"
        {...rest}
      >
        READ JOURNAY
      </p>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};
