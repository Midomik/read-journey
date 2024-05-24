import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../assets/icons/ArrowIcon';
import PropTypes from 'prop-types';
import { MovieCard } from '../../MovieCard/MovieCard';
import { useDispatch } from 'react-redux';
import { setIsOpenAddToLibraryModal } from '../../../../features/redux/books/reducer';
// import { setIsOpenModal } from '../../../../features/redux/books/reducer';

export const RecomendedBooks = ({ books }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-[78px] rounded-[12px] bg-gray-26 p-[20px]">
      <h3 className="mb-[20px] text-[20px] font-[700] leading-[100%]">
        Recomended books
      </h3>
      <ul className="flex gap-[20px]">
        {books &&
          books.map((book) => {
            return (
              <li
                onClick={() => dispatch(setIsOpenAddToLibraryModal(book))}
                className="w-[71px]"
                key={book._id}
              >
                <MovieCard
                  size="small"
                  title={book.title}
                  imageUrl={book.imageUrl}
                  author={book.author}
                />
              </li>
            );
          })}
      </ul>

      <div className="mt-[14px] flex justify-between">
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
};
