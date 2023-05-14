import * as Yup from 'yup';

export const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string().nullable().required('Required'),
  confirmPassword: Yup.string().when('password', {
    is: (val) => val && !!val.length,
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match'
    ),
  }).required('Required')
});