import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectBookData } from '../../../../../../features/redux/books/selectors';
import { PointIcon } from '../../../../../assets/icons/PointIcon';
import { ReadingEvent } from './ReadingEvent/ReadingEvent';
import { nanoid } from 'nanoid';

export const Dairy = ({ bookId }) => {
  const bookData = useSelector(selectBookData);
  const progress = bookData?.progress;
  //   const progress = [
  //     {
  //       startPage: 1,
  //       startReading: '2023-11-11T22:49:29.590Z',
  //       finishPage: 4,
  //       finishReading: '2023-11-11T22:53:34.959Z',
  //       speed: 44,
  //       status: 'inactive',
  //     },
  //     {
  //       startPage: 5,
  //       startReading: '2023-11-11T22:53:50.853Z',
  //       finishPage: 7,
  //       finishReading: '2023-11-11T22:54:59.914Z',
  //       speed: 105,
  //       status: 'inactive',
  //     },
  //     {
  //       startPage: 8,
  //       startReading: '2023-12-11T22:53:50.853Z',
  //       finishPage: 10,
  //       finishReading: '2023-12-11T22:54:59.914Z',
  //       speed: 105,
  //       status: 'inactive',
  //     },
  //   ];

  const groupedProgress = progress?.reduce((acc, item) => {
    const date = item.startReading.slice(0, 10);
    const existingGroup = acc.find((group) => group.date === date);
    if (existingGroup) {
      existingGroup.data.push(item);
      existingGroup.totalPages += item.finishPage - item.startPage + 1;
    } else {
      acc.push({
        date,
        totalPages: item.finishPage - item.startPage + 1,
        data: [item],
      });
    }
    return acc;
  }, []);

  console.log(groupedProgress);

  return (
    <div className=" relative mt-[20px] flex w-full flex-col gap-[40px] overflow-hidden rounded-[12px] bg-gray-26 p-[20px]">
      {groupedProgress?.map((item, index) => {
        return (
          <div key={nanoid()}>
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
                {item.totalPages} pages
              </p>
            </div>

            <ReadingEvent bookId={bookId} eventData={item} totalPages={600} />
          </div>
        );
      })}
      <div className="absolute bottom-[20px] left-[29px] top-[20px] z-[10] w-[2px] bg-gray-1f"></div>
    </div>
    // <div>
    //   <button onClick={() => dispatch(startReading({ id: bookId, page: 6 }))}>
    //     start
    //   </button>
    //   <button onClick={() => dispatch(finishReading({ id: bookId, page: 50 }))}>
    //     finish
    //   </button>
    // </div>
  );
};

Dairy.propTypes = {
  bookId: PropTypes.string,
};
