import * as Yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

export const userDataValidationSchema = Yup.object().shape({
file: Yup.mixed().nullable().required('Required photo').test('FILE_SIZE', 'Uploaded file is too large', (value) =>
    !value || (value && value.size < 1024 * 1024)
  )
  .test('fileType', 'Unsupported file format', (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))),
    name: Yup.string(),
    email: Yup.string().email('Enter a valid Email').required('Required'),
    birthday: Yup.string().matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Birthday must be in format DD.MM.YYYY').required('Required'),
    phone: Yup.string().matches(/^\+380\d{9}$/, 'Phone number must be in format +380000000000').required('Required'),
    city: Yup.string().matches(/^[A-Za-z\s]+$/, 'City name must contain only letters and spaces'),
});