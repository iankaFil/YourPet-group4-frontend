import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Enter a name'),
  birthday: yup.string().required('Enter a date of birth'),
  breed: yup.string().required('Enter a breed'),
});

export const validationSchemaSell = yup.object().shape({
  title: yup.string().required('Enter a title'),
  name: yup.string().required('Enter a name'),
  birthday: yup.string().required('Enter a date of birth'),
  breed: yup.string().required('Enter a breed'),
});

export const validationSchemaThree = yup.object().shape({
  photo: yup.string().required('Please upload a photo'),
  comments: yup.string().required('Please enter comments'),
  // price: yup.string().required('Please enter your price'),
  // place: yup.string().required('Please enter your place'),
});
