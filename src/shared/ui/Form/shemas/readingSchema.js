import * as yup from 'yup';

export const readingSchema = yup.object().shape({
  page: yup.string().min(1, 'Page number is required!'),
});
