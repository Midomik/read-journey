import PropTypes from 'prop-types';
import { PrevArrowIcon } from '../../assets/icons/PrevArrowIcon';
import { NextArrowIcon } from '../../assets/icons/NextArrowIcon';

export const PaginBar = ({
  prevIsDisabled = true,
  nextIsDisadled = false,
  onClickPrev,
  onClickNext,
}) => {
  const buttonsClass =
    'text- flex items-center justify-center rounded-[100%] bg-transparent border border-gray-e3 w-[40px] h-[40px]';
  return (
    <div className="flex gap-[8px]">
      <button
        disabled={prevIsDisabled}
        className={`${buttonsClass}`}
        onClick={onClickPrev}
      >
        <PrevArrowIcon isDisabled={prevIsDisabled} />
      </button>
      <button
        disabled={nextIsDisadled}
        className={`${buttonsClass}`}
        onClick={onClickNext}
      >
        <NextArrowIcon isDisabled={nextIsDisadled} />
      </button>
    </div>
  );
};

PaginBar.propTypes = {
  prevIsDisabled: PropTypes.bool,
  nextIsDisadled: PropTypes.bool,
  onClickPrev: PropTypes.func,
  onClickNext: PropTypes.func,
};
