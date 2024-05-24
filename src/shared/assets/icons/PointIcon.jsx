import PropTypes from 'prop-types';

export const PointIcon = ({ isActive = false }) => {
  return (
    // <svg
    //   width="20"
    //   height="20"
    //   viewBox="0 0 20 20"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <rect width="20" height="20" rx="4" fill="#F9F9F9" />
    //   <rect x="4" y="4" width="12" height="12" rx="2" fill="#141414" />
    // </svg>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="20"
        height="20"
        rx="4"
        fill={isActive ? '#F9F9F9' : '#686868'}
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="12"
        rx="2"
        fill={isActive ? '#141414' : '#1F1F1F'}
      />
    </svg>
  );
};

PointIcon.propTypes = {
  isActive: PropTypes.bool,
};
