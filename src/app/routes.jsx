import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import {
  Home,
  Login,
  Register,
  MyReading,
  MyLibrary,
  NotFound,
} from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="reading" element={<MyReading />} />
          <Route path="library" element={<MyLibrary />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
