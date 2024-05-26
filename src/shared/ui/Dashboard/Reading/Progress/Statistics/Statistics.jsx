import PropTypes from 'prop-types';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Statistics = ({ maxFinishPage, totalPages }) => {
  const percentage = (maxFinishPage * 100) / totalPages;

  const isNumber = (value) => {
    const regex = /^[0-9]+(\.[0-9]+)?$/;

    return regex.test(value);
  };
  return (
    <div className="tablet-only:w-[321px] mt-[20px]">
      <p className="mb-[20px] leading-[129%] tracking-[-0.02] text-gray-68  tablet:hidden desktop:block">
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>
      <div className="rounded-[12px] bg-gray-26 pb-[20px] pt-[31px]">
        <div className="mx-auto mobile-sm:w-[116px] tablet:w-[138px] desktop:w-[189px]">
          <CircularProgressbar
            value={percentage}
            text="100%"
            styles={{
              root: {
                width: '100%',
                height: '100%',
              },
              path: { stroke: '#30b94d' }, 
              trail: { stroke: '#1f1f1f' }, 
              text: {
                fill: '#f9f9f9',
                fontSize: '12px',
                fontWeight: '700',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
              }, 
            }}
          />
        </div>

        <div className="mt-[10px] flex justify-center gap-[15px]">
          <div className="h-[14px] w-[14px] rounded-[4px] bg-[#30b94d]"></div>
          <div className="flex flex-col gap-[8px]">
            <p className="leading-[80%] tracking-[-0.02em] mobile-sm:text-[14px] tablet:text-[20px]">
              {isNumber(percentage) ? percentage.toFixed(2) : 0}%
            </p>
            <p className="leading-[117%] tracking-[-0.02em] text-gray-68 mobile-sm:text-[10px] tablet:text-[12px]">
              {maxFinishPage} pages read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
Statistics.propTypes = {
  maxFinishPage: PropTypes.number,
  totalPages: PropTypes.number,
};
