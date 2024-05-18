import { Route, Routes } from 'react-router-dom';
import App from './App';
import { Home, Auth, MyReading, MyLibrary, NotFound } from '../pages';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from '../features/redux/auth/operations';
import { PrivateRoute } from '../app/providers/PrivateRoute';
import { PublicRoute } from '../app/providers/PublicRoute';

export const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PrivateRoute component={<Home />} />} />
        <Route
          path="reading"
          element={<PrivateRoute component={<MyReading />} />}
        />
        <Route
          path="library"
          element={<PrivateRoute component={<MyLibrary />} />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="login" element={<PublicRoute component={<Auth />} />} />
      <Route path="register" element={<PublicRoute component={<Auth />} />} />
    </Routes>
  );
};
