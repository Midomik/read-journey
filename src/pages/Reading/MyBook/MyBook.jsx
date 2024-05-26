import PropTypes from 'prop-types';
import { StartReadIcon } from '../../../shared/assets/icons/StartReadIcon';
import { StopReadIcon } from '../../../shared/assets/icons/StopReadIcon';

export const MyBook = ({ bookData, timeLeftToRead }) => {
  const { imageUrl, title, author } = bookData;

  return (
    <div className="w-full rounded-[30px] bg-gray-1f mobile-sm:px-[20px] mobile-sm:py-[40px] tablet:p-[40px]">
      <div className="mb-[44px] flex justify-between">
        <h2 className="font-[700] leading-[114%] tracking-[-0.02em] mobile-sm:text-[20px] tablet:text-[28px]">
          My reading
        </h2>
        {bookData?.progress !== undefined ? (
          bookData?.progress[bookData?.progress?.length - 1]?.status ===
            'active' || bookData?.status === 'unread' ? (
            ''
          ) : (
            <p className=" leading-[129%] tracking-[-0.02em] text-gray-68">
              {timeLeftToRead?.hours !== 0 ? timeLeftToRead?.hours : ''}{' '}
              {timeLeftToRead?.hours !== 0 ? 'hours and' : ''}{' '}
              {timeLeftToRead?.minutes} minutes left
            </p>
          )
        ) : (
          ''
        )}
      </div>

      <div className="flex flex-col items-center gap-[20px]">
        <img
          src={imageUrl}
          alt={title}
          className=" desktop::w-[224px] rounded-[8px] mobile-sm:w-[146px] tablet:w-[169px]"
        />
        <div>
          <p className=" mb-[4px] text-center font-[700] leading-[100%] tracking-[-0.02em] mobile-sm:w-[146px] mobile-sm:text-[14px] tablet:w-auto tablet:text-[20px]">
            {title}
          </p>
          <p className=" text-center leading-[129%] tracking-[-0.02em] text-gray-68 mobile-sm:text-[10px] tablet:text-[14px]">
            {author}
          </p>
        </div>

        <div>
          {
            /* {bookData?.progress[bookData?.progress?.length - 1].status ===
          'active' ? (
            <StopReadIcon />
          ) : (
            <StartReadIcon />
          )} */

            bookData?.progress !== undefined ? (
              bookData?.progress[bookData?.progress?.length - 1]?.status ===
              'active' ? (
                <StopReadIcon />
              ) : (
                <StartReadIcon />
              )
            ) : (
              ''
            )
          }
        </div>
      </div>
    </div>
  );
};

MyBook.propTypes = {
  timeLeftToRead: PropTypes.object,
  bookData: PropTypes.object,
};
