import PropTypes from 'prop-types';

export const Button = ({ className, children, ...rest }) => {
  return (
    <button
      className={`border-[rgba(249, 249, 249, 0.2)] rounded-[30px] border px-[28px] py-[12px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
