import axios from 'axios';
// import { clearToken } from '../auth/auth.reducer';
export const instance = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api',
});

// export const setupAPI = (dispatch) => {
//   axios.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//       if (error.response.status === 401) {
//         dispatch(clearToken());
//       }

//       return Promise.reject(error);
//     }
//   );
// };
