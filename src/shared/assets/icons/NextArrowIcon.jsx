import PropTypes from 'prop-types';

export const NextArrowIcon = ({ isDisabled }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1L6.5 6L1.5 11"
        stroke="#F9F9F9"
        strokeOpacity={isDisabled ? '0.2' : '1'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

NextArrowIcon.propTypes = {
  isDisabled: PropTypes.bool,
};
