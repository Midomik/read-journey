import PropTypes from 'prop-types';
import { HourglassIcon } from '../../../../assets/icons/HourglassIcon';
import { PieChartIcon } from '../../../../assets/icons/PieChartIcon';
import React from 'react';

export const Progress = ({ changeWindow, label, bookId, children }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (child?.type !== undefined) {
      return React.cloneElement(child, {
        bookId,
      });
    }
    return child;
  });

  return (
    <div className="">
      <div className="flex justify-between ">
        <h3 className=" text-[20px] font-[700] leading-[100%]">{label}</h3>
        {label !== 'Progress' && (
          <div className="flex gap-[8px]">
            <div onClick={() => changeWindow('Dairy')}>
              <HourglassIcon isActive={label === 'Dairy'} />
            </div>
            <div onClick={() => changeWindow('Statistics')}>
              <PieChartIcon isActive={label === 'Statistics'} />
            </div>
          </div>
        )}
      </div>

      {childrenWithProps}
    </div>
  );
};

Progress.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  changeWindow: PropTypes.func,
  bookId: PropTypes.string,
};
