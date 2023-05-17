import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  petName: yup.string().required('Enter a name'),
  birthDate: yup.string().required('Enter a date of birth'),
  breed: yup.string().required('Enter a breed'),
});
