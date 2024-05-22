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
  selectIsOpenModal,
  selectModalData,
  selectPageData,
  selectisOpenSuccAddModal,
} from '../../features/redux/books/selectors';
import { MovieCard } from '../../shared/ui/MovieCard/MovieCard';
import { PaginBar } from '../../shared/ui/PaginBar';
import { setIsOpenModal } from '../../features/redux/books/reducer';
import { Modal } from '../../shared/ui/Modal';

export const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const pageData = useSelector(selectPageData);
  const isOpenModal = useSelector(selectIsOpenModal);
  const modalData = useSelector(selectModalData);
  const isOpenSuccAddModal = useSelector(selectisOpenSuccAddModal);

  const [filterQuery, setFilterQuery] = useState(null);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRecomendedBooks());
  }, [dispatch]);

  const prevPage = () => {
    const obj = { page: pageData.page - 1 };
    if (pageData.page > 1) {
      if (filterQuery !== null) {
        if (filterQuery?.title) obj.title = filterQuery.title;
        if (filterQuery?.author) obj.author = filterQuery.author;
      }
      dispatch(getRecomendedBooks(obj));
    }
  };

  const nextPage = () => {
    const obj = { page: pageData.page + 1 };
    if (pageData.page !== pageData.totalPages) {
      if (filterQuery !== null) {
        if (filterQuery?.title) obj.title = filterQuery.title;
        if (filterQuery?.author) obj.author = filterQuery.author;
      }
      dispatch(getRecomendedBooks(obj));
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
    dispatch(setIsOpenModal());
  };

  return (
    <>
      <div className="flex gap-[16px]">
        <Dashboard>
          <Form
            className="mb-[20px] "
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
            <Button className="mr-auto mt-[12px]" type="submit">
              To apply
            </Button>
          </Form>
          <GetStarted />
          <Quote />
        </Dashboard>

        <div className="w-full rounded-[30px] bg-gray-1f p-[40px]">
          <div className="mb-[20px] flex items-start justify-between">
            <h2 className="text-[28px] font-[700] leading-[114%]">
              Recomended
            </h2>

            <PaginBar
              prevIsDisabled={pageData?.page === 1}
              nextIsDisadled={pageData?.page >= pageData?.totalPages}
              onClickPrev={prevPage}
              onClickNext={nextPage}
            />
          </div>

          <ul className="flex flex-wrap gap-x-[20px] gap-y-[27px] ">
            {books &&
              books.map((book) => {
                const { _id, title, author, imageUrl } = book;
                return (
                  <li
                    onClick={() => dispatch(setIsOpenModal(book))}
                    key={_id}
                    className="w-[137px]"
                  >
                    <MovieCard
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
      {isOpenModal && (
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
