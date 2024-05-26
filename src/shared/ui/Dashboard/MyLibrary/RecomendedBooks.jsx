import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../assets/icons/ArrowIcon';
import PropTypes from 'prop-types';
import { BookCard } from '../../BookCard/BookCard';
import { useDispatch } from 'react-redux';
import { setIsOpenAddToLibraryModal } from '../../../../features/redux/books/reducer';

export const RecomendedBooks = ({ books, className }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`rounded-[12px] bg-gray-26 p-[20px] mobile-sm:mt-[20px] tablet:mt-0 desktop:mt-[78px] ${className}`}
    >
      <h3 className="mb-[20px] font-[700] leading-[100%] mobile-sm:text-[18px] tablet:text-[20px]">
        Recomended books
      </h3>
      <ul className="flex gap-[20px] mobile-sm:flex-wrap tablet:flex-nowrap">
        {books &&
          books.map((book) => {
            return (
              <li
                onClick={() => dispatch(setIsOpenAddToLibraryModal(book))}
                className="w-[71px]"
                key={book._id}
              >
                <BookCard
                  size="small"
                  title={book.title}
                  imageUrl={book.imageUrl}
                  author={book.author}
                />
              </li>
            );
          })}
      </ul>

      <div className="mt-[14px] flex justify-between mobile-sm:text-[12px] tablet:text-[14px]">
        <Link to="/" className="text-gray-68 underline">
          Home
        </Link>
        <Link to="/">
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
};

RecomendedBooks.propTypes = {
  books: PropTypes.any,
  className: PropTypes.string,
};
