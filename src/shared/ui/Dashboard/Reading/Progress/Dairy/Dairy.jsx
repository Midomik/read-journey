import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectBookData } from '../../../../../../features/redux/books/selectors';
import { PointIcon } from '../../../../../assets/icons/PointIcon';
import { ReadingEvent } from './ReadingEvent/ReadingEvent';
import { nanoid } from 'nanoid';

export const Dairy = ({ bookId }) => {
  const bookData = useSelector(selectBookData);
  const progress = bookData?.progress;

  const groupedProgress = progress?.reduce((acc, item) => {
    const date = item.startReading.slice(0, 10);
    const existingGroup = acc.find((group) => group.date === date);
    if (existingGroup) {
      existingGroup.data.unshift(item);
      existingGroup.totalPages += item.finishPage - item.startPage + 1;
    } else {
      acc.unshift({
        date,
        totalPages: item.finishPage - item.startPage + 1,
        data: [item],
      });
    }
    return acc;
  }, []);
  

  return (
    <div className="tablet-only:w-[321px] mobile-max:max-h-[211px] tablet-max:max-h-[252px] tablet-max:overflow-y-scroll relative mt-[20px] flex w-full flex-col gap-[40px] rounded-[12px] bg-gray-26 p-[20px]  ">
      {groupedProgress
        ?.filter((item) => item.data[0].status !== 'in-progress')
        .map((item, index) => {
          return (
            <div className="relative" key={nanoid()}>
              <div className="mb-[28px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <div className="z-[20]">
                    <PointIcon
                      isActive={
                        index === groupedProgress.length - 1 &&
                        groupedProgress.length !== 1
                          ? false
                          : true
                      }
                    />
                  </div>
                  <p
                    className={`text-[16px] font-[700] leading-[112%] ${
                      index === groupedProgress.length - 1 &&
                      groupedProgress.length !== 1
                        ? 'text-gray-68'
                        : 'text-white'
                    }`}
                  >
                    {item.date.slice(0, 10)}
                  </p>
                </div>

                <p className="mr-[20px] leading-[129%] text-gray-68">
                  {isNaN(item.totalPages)
                    ? item.data.reduce((acc, groupedItem) => {
                        if (!isNaN(groupedItem.finishPage)) {
                          acc =
                            Number(acc) +
                            Number(
                              groupedItem.finishPage - groupedItem.startPage
                            ) +
                            1;
                        }
                        return acc;
                      }, [])
                    : item.totalPages}{' '}
                  pages
                </p>
              </div>

              <ReadingEvent
                bookId={bookId}
                eventData={item}
                totalPages={bookData?.totalPages}
              />
              <div className="absolute bottom-[20px] left-[9px] top-[20px] z-[10] w-[2px] bg-gray-1f"></div>
            </div>
          );
        })}
    </div>
  
  );
};

Dairy.propTypes = {
  bookId: PropTypes.string,
};
