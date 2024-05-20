import PropTypes from 'prop-types';
export const PrevArrowIcon = ({ isDisabled }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 11L1.5 6L6.5 1"
        stroke="#F9F9F9"
        strokeOpacity={isDisabled ? '0.2' : '1'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PrevArrowIcon.propTypes = {
  isDisabled: PropTypes.bool,
};
