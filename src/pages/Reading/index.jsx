import { useParams } from 'react-router-dom';
import { Dashboard } from '../../shared/ui/Dashboard';
import { useEffect, useState } from 'react';
import { refreshThunk } from '../../features/redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';

import { Progress } from '../../shared/ui/Dashboard/Reading/Progress/Progress';
import { NoProgress } from '../../shared/ui/Dashboard/Reading/Progress/NoProgress/NoProgress';
import { Dairy } from '../../shared/ui/Dashboard/Reading/Progress/Dairy/Dairy';
import { Statistics } from '../../shared/ui/Dashboard/Reading/Progress/Statistics/Statistics';
import {
  finishReading,
  getBookById,
  startReading,
} from '../../features/redux/books/operations';
import { selectBookData } from '../../features/redux/books/selectors';
import { readingSchema } from '../../shared/ui/Form/shemas/readingSchema';

export const Reading = () => {
  const dispatch = useDispatch();
  const bookData = useSelector(selectBookData);

  const [progressWindow, setProgressWindow] = useState('Dairy');

  const { bookId } = useParams();

  const maxFinishPage = bookData
    ? Math.max(...bookData.progress.map((item) => item.finishPage))
    : null;

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBookById(bookId));
  }, [dispatch]);

  const onStart = (value) => {
    console.log('start');
    const data = { ...value, id: bookId };
    dispatch(startReading(data));
  };

  const onStop = (value) => {
    console.log('stop');
    const data = { ...value, id: bookId };
    dispatch(finishReading(data));
  };

  return (
    <div>
      <Dashboard>
        <Form
          label="Start page:"
          submit={
            bookData?.progress[bookData?.progress.length - 1].status ===
            'active'
              ? onStop
              : onStart
          }
          validationSchema={readingSchema}
          className="mb-[40px]"
        >
          <Input name="page" title="Page number:" placeholder="0" />
          <Button className="mr-auto mt-[12px]">
            {bookData?.progress[bookData?.progress.length - 1].status ===
            'active'
              ? 'To stop'
              : 'To start'}
          </Button>
        </Form>
        <div>
          <Progress
            bookId={bookId}
            changeWindow={setProgressWindow}
            label={progressWindow}
          >
            {progressWindow === 'Progress' && <NoProgress />}
            {progressWindow === 'Dairy' && <Dairy />}
            {progressWindow === 'Statistics' && (
              <Statistics
                maxFinishPage={maxFinishPage}
                totalPages={bookData.totalPages}
              />
            )}
          </Progress>
        </div>
      </Dashboard>
    </div>
  );
};