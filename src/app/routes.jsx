import { Route, Routes } from 'react-router-dom';
import App from './App';
import { Home, Auth, Reading, MyLibrary, NotFound } from '../pages';
import { PrivateRoute } from '../app/providers/PrivateRoute';
import { PublicRoute } from '../app/providers/PublicRoute';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PrivateRoute component={<Home />} />} />
        <Route
          path="library"
          element={<PrivateRoute component={<MyLibrary />} />}
        />

        <Route
          path="reading/:bookId"
          element={<PrivateRoute component={<Reading />} />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="login" element={<PublicRoute component={<Auth />} />} />
      <Route path="register" element={<PublicRoute component={<Auth />} />} />
    </Routes>
  );
};
