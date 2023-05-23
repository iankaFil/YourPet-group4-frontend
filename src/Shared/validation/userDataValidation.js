import * as Yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']
const MAX_FILE_SIZE = 3 * 1024 * 1024;

export const userDataValidationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email('Enter a valid Email')
    .required('Required'),
  birthday: Yup.string()
    .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Birthday must be in format DD.MM.YYYY')
    .required('Required'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Phone format +380000000000'),
  city: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'City contain only letters and spaces'),
});

export const avatarValidationSchema = Yup.object().shape({
  avatar: Yup.mixed().nullable()
.test('FILE_SIZE', 'Uploaded file is too large', (value) =>
    !value || (value && value.size < MAX_FILE_SIZE)
  )
  .test('fileType', 'Unsupported file format', (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))),
});
