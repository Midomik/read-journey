import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';
import { GraphicIcon } from '../../../../../../assets/icons/GraphicIcon';
import { TrashIconForDairy } from '../../../../../../assets/icons/TrashIconForDairy';
import { useDispatch } from 'react-redux';
import { deleteReading } from '../../../../../../../features/redux/books/operations';

export const ReadingEvent = ({ eventData, totalPages, bookId }) => {
  const dispatch = useDispatch();
  

  const onDeleteReading = (readingId) => {
    const data = { readingId, bookId };
    dispatch(deleteReading(data));
  };
  

  return (
    <div className="flex flex-col gap-[28px]">
      {eventData.data
        .filter((item) => item.status !== 'active')
        .map((item) => {
          const { startReading, finishReading, finishPage, speed, _id } = item;

          const partOfBook = ((finishPage * 100) / totalPages).toFixed(1);
          

          const differenceInMinutes = Math.floor(
            (new Date(finishReading) - new Date(startReading)) / 60000
          );

          return (
            <div key={nanoid()}>
              <div className=" ml-[30px] flex justify-between">
                <div>
                  <p className="mb-[8px] text-[20px] leading-[100%]">
                    {partOfBook}%
                  </p>
                  <p className="text-[12px] leading-[117%] text-gray-68">
                    {differenceInMinutes} minutes
                  </p>
                </div>

                <div className="flex gap-[8px]">
                  <div className="w-[60px]">
                    <GraphicIcon />
                    <p className="mt-[7px] text-center text-[12px] leading-[117%] tracking-[-0.02em] text-gray-68">
                      {speed} pages per hour
                    </p>
                  </div>
                  <div
                    onClick={() => onDeleteReading(_id)}
                    className="mt-[6px]"
                  >
                    <TrashIconForDairy />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

ReadingEvent.propTypes = {
  eventData: PropTypes.object,
  totalPages: PropTypes.number,
  bookId: PropTypes.string,
};
