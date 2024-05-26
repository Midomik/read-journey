import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../shared/ui/Button';
import { Dashboard } from '../../shared/ui/Dashboard';
import { GetStarted } from '../../shared/ui/Dashboard/Home/GetStarted';
import { Quote } from '../../shared/ui/Dashboard/Home/Quote';
import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import {
  addFromRecomend,
  getRecomendedBooks,
} from '../../features/redux/books/operations';
import { useEffect, useState } from 'react';
import { refreshThunk } from '../../features/redux/auth/operations';
import {
  selectBooks,
  selectIsOpenStartReadingModal,
  selectModalData,
  selectPageData,
  selectisOpenSuccAddModal,
} from '../../features/redux/books/selectors';
import { BookCard } from '../../shared/ui/BookCard/BookCard';
import { PaginBar } from '../../shared/ui/PaginBar';
// import { setIsOpenModal } from '../../features/redux/books/reducer';
import { Modal } from '../../shared/ui/Modal';
import { setIsOpenAddToLibraryModal } from '../../features/redux/books/reducer';

export const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const pageData = useSelector(selectPageData);
  const modalData = useSelector(selectModalData);
  const isOpenSuccAddModal = useSelector(selectisOpenSuccAddModal);
  const isOpenStartReadingModal = useSelector(selectIsOpenStartReadingModal);

  const [filterQuery, setFilterQuery] = useState(null);
  const [limit, setLimit] = useState();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth > 1440) {
      setLimit(10);
    } else if (window.innerWidth > 768) {
      setLimit(8);
    } else {
      setLimit(2);
    }

    dispatch(getRecomendedBooks({ limit }));
  }, [limit, dispatch]);

  const prevPage = () => {
    const obj = { page: pageData.page - 1 };
    if (pageData.page > 1) {
      if (filterQuery !== null) {
        if (filterQuery?.title) obj.title = filterQuery.title;
        if (filterQuery?.author) obj.author = filterQuery.author;
      }
      dispatch(getRecomendedBooks({ ...obj, limit }));
    }
  };

  const nextPage = () => {
    const obj = { page: pageData.page + 1 };
    if (pageData.page !== pageData.totalPages) {
      if (filterQuery !== null) {
        if (filterQuery?.title) obj.title = filterQuery.title;
        if (filterQuery?.author) obj.author = filterQuery.author;
      }
      dispatch(getRecomendedBooks({ ...obj, limit }));
    }
  };

  const onSubmit = (values) => {
    const cleanedObj = {};
    for (const key in values) {
      if (
        values[key] !== null &&
        values[key] !== undefined &&
        values[key] !== ''
      ) {
        cleanedObj[key] = values[key];
      }
    }
    console.log(cleanedObj);
    setFilterQuery(cleanedObj);
    dispatch(getRecomendedBooks(cleanedObj));
  };

  const addToLibrary = () => {
    dispatch(addFromRecomend(modalData?._id));
    // dispatch(setIsOpenModal());
  };

  return (
    <>
      <div className=" flex flex-col mobile-sm:gap-[10px] tablet:gap-[16px]">
        <Dashboard className="tablet:flex tablet:justify-center tablet:gap-[30px] tablet:p-[32px] desktop:block ">
          <Form
            className="mobile-sm:mb-[20px] desktop:mb-[20px]"
            label="Filters:"
            isReset={false}
            submit={onSubmit}
          >
            <Input
              name="title"
              title="Book title:"
              variant="primary"
              placeholder="Enter the text"
            />
            <Input
              name="author"
              title="The author:"
              variant="primary"
              placeholder="Enter the text"
            />
            <Button size="small" className="mr-auto mt-[12px]" type="submit">
              To apply
            </Button>
          </Form>
          <GetStarted />
          <Quote className="mobile-sm:hidden desktop:flex" />
        </Dashboard>

        <div className="w-full rounded-[30px] bg-gray-1f mobile-sm:px-[20px] mobile-sm:py-[40px] tablet:p-[40px]">
          <div className="mb-[20px] flex items-start justify-between">
            <h2 className="font-[700] leading-[114%] mobile-sm:text-[20px] tablet:text-[28px]">
              Recomended
            </h2>

            <PaginBar
              prevIsDisabled={pageData?.page === 1}
              nextIsDisadled={pageData?.page >= pageData?.totalPages}
              onClickPrev={prevPage}
              onClickNext={nextPage}
            />
          </div>

          <ul className="flex flex-wrap mobile-sm:gap-x-[20px] tablet:gap-x-[25px] tablet:gap-y-[27px] desktop:gap-x-[20px]  ">
            {books &&
              books.map((book) => {
                const { _id, title, author, imageUrl } = book;
                return (
                  <li
                    onClick={() => dispatch(setIsOpenAddToLibraryModal(book))}
                    key={_id}
                    className="w-[137px]"
                  >
                    <BookCard
                      id={_id}
                      title={title}
                      author={author}
                      imageUrl={imageUrl}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      {isOpenStartReadingModal && (
        <Modal>
          <img
            src={modalData?.imageUrl}
            alt={modalData?.title}
            className="mb-[16px] h-[213px] w-[153px] rounded-[8px]"
          />
          <h3 className="mb-[2px] text-[20px] font-[700] leading-[100%] ">
            {modalData?.title}
          </h3>
          <p className="mb-[4px] leading-[129%] text-gray-68">
            {modalData?.author}
          </p>
          <p className="mb-[32px] text-[10px] leading-[120%]">
            {modalData?.totalPages} pages
          </p>
          <Button onClick={() => addToLibrary()}>Add to library</Button>
        </Modal>
      )}
      {isOpenSuccAddModal && (
        <Modal
          variant="succAdd"
          className="min-h-[290px] w-[342px] justify-center"
        />
      )}
    </>
  );
};
