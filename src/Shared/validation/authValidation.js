import * as Yup from 'yup';

export const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string().nullable().required('Required'),
  confirmPassword: Yup.string()
  .nullable()
  .when('password', (password, schema) => {
    return password
      ? schema.required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
      : schema.notRequired();
  })
});