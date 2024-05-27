import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../../features/redux/auth/operations';
import {
  addFromLibrary,
  deleteOwnBook,
  getOwnBooks,
  getRecomendedBooks,
} from '../../features/redux/books/operations';
import { Button } from '../../shared/ui/Button';
import { Dashboard } from '../../shared/ui/Dashboard';
import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { useEffect } from 'react';
import { RecomendedBooks } from '../../shared/ui/Dashboard/MyLibrary/RecomendedBooks';
import {
  selectBooks,
  selectOwnBooks,
} from '../../features/redux/books/selectors';
import { BookCard } from '../../shared/ui/BookCard/BookCard';
import booksBigImg from '../../shared/assets/images/png/books-img-big.png';
import { SelectUI } from '../../shared/ui/Select';
import { createBookSchema } from '../../shared/ui/Form/shemas/createBookSchema';
import { setIsOpenStartReadingModal } from '../../features/redux/books/reducer';
import { Notify } from 'notiflix';

export const MyLibrary = () => {
  const dispatch = useDispatch();
  const recomendedBooks = useSelector(selectBooks);
  const onwBooks = useSelector(selectOwnBooks);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRecomendedBooks({ limit: 3 }));
    dispatch(getOwnBooks());
  }, [dispatch]);

  const createBook = (values) => {
    const isBookInLibrary = onwBooks.some(
      (book) => book?.title === values?.title
    );

    if (isBookInLibrary) {
      return Notify.failure(`Error! This book is already in your library`, {
        timeout: 3000,
      });
    }
    dispatch(addFromLibrary(values));
  };

  const onDeleteBook = (id) => {
    dispatch(deleteOwnBook(id));
  };

  const getFilteredBooks = (value) => {
    const data = value === 'all' ? '' : value;
    dispatch(getOwnBooks(data));
  };

  return (
    <div className="flex mobile-sm:flex-col mobile-sm:gap-[10px] tablet:gap-[16px] desktop:flex-row">
      <Dashboard className=" tablet:flex tablet:justify-center tablet:gap-[32px] desktop:block ">
        <Form
          label="Create your library"
          isReset={true}
          validationSchema={createBookSchema}
          submit={createBook}
        >
          <Input name="title" title="Book title:" placeholder="Enter text" />
          <Input name="author" title="The author:" placeholder="Enter text" />
          <Input name="totalPages" title="Number of pages:" placeholder="0" />
          <Button className="mr-auto mt-[12px]">Add book</Button>
        </Form>
        <RecomendedBooks books={recomendedBooks} />
      </Dashboard>

      <div className="w-full rounded-[30px] bg-gray-1f p-[40px]">
        <div className="mb-[28px] flex justify-between">
          <h2 className="font-[700] leading-[114%] mobile-sm:text-[20px] tablet:text-[28px] ">
            My library
          </h2>
          <SelectUI onChange={getFilteredBooks} />
        </div>

        <ul className="flex flex-wrap gap-x-[20px] gap-y-[27px] ">
          {onwBooks &&
            onwBooks.map((book) => {
              const { _id, title, author, imageUrl } = book;
              return (
                <li
                  onClick={() => dispatch(setIsOpenStartReadingModal(book))}
                  key={_id}
                  className="max-w-[137px]"
                >
                  <BookCard
                    id={_id}
                    title={title}
                    author={author}
                    imageUrl={imageUrl}
                    variant="delete"
                    onDelete={onDeleteBook}
                  />
                </li>
              );
            })}
        </ul>
        {onwBooks?.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center ">
            <div className="mb-[20px] flex h-[130px] w-[130px] items-center justify-center rounded-full bg-gray-26">
              <img
                src={booksBigImg}
                alt="books placeholder"
                className="h-[70px] w-[70px]"
              />
            </div>
            <p className="w-[274px] text-center leading-[129%] tracking-[-0.02em]">
              To start training, add{' '}
              <span className="text-gray-68">some of your books</span> or from
              the recommended ones
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
