import PropTypes from 'prop-types';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Statistics = ({ maxFinishPage, totalPages }) => {
  const percentage = Math.floor((maxFinishPage * 100) / totalPages);
  console.log(percentage);

  return (
    <div>
      <CircularProgressbar value={percentage} text="100%" />
    </div>
  );
};
Statistics.propTypes = {
  maxFinishPage: PropTypes.number,
  totalPages: PropTypes.number,
};
