import { LogoIcon } from '../../assets/icons/LogoIcon';
import PropTypes from 'prop-types';

export const Logo = ({ className, ...rest }) => {
  return (
    <div className={`flex items-center gap-[4px] ${className}`}>
      <LogoIcon />
      <p className="text-[18px] font-[700] " {...rest}>
        READ JOURNAY
      </p>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};
