import PropTypes from 'prop-types';

export const HourglassIcon = ({ isActive = false }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10L6.43926 7.03274C5.91022 6.59187 5.6457 6.37144 5.45553 6.10122C5.28704 5.86179 5.16191 5.59464 5.08585 5.31192C5 4.99284 5 4.64851 5 3.95985V1.66669M10 10L13.5607 7.03274C14.0898 6.59187 14.3543 6.37144 14.5445 6.10122C14.713 5.86179 14.8381 5.59464 14.9142 5.31192C15 4.99284 15 4.64851 15 3.95985V1.66669M10 10L6.43926 12.9673C5.91022 13.4082 5.6457 13.6286 5.45553 13.8988C5.28704 14.1382 5.16191 14.4054 5.08585 14.6881C5 15.0072 5 15.3515 5 16.0402V18.3334M10 10L13.5607 12.9673C14.0898 13.4082 14.3543 13.6286 14.5445 13.8988C14.713 14.1382 14.8381 14.4054 14.9142 14.6881C15 15.0072 15 15.3515 15 16.0402V18.3334"
        stroke={`${isActive ? '#F9F9F9' : '#686868'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33325 1.66669H16.6666M3.33325 18.3334H16.6666"
        stroke={`${isActive ? '#F9F9F9' : '#686868'}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
HourglassIcon.propTypes = {
  isActive: PropTypes.bool,
};
