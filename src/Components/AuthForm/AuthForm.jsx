import React from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from 'Components/Button/Button';

import { authValidationSchema } from './../../Shared/validation/authValidation';

import css from './AuthForm.module.css'

const AuthForm = ({isRegister}) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={authValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={`${css.form} ${isRegister ? css.register : css.login}`}>
          <div className={css.inputContainer}>
            {isRegister ? <h2 className={css.title}>Registration</h2> : <h2 className={css.title}>Login</h2>}
            <div className={css.inputWrap}>
            <label htmlFor="email" hidden>Email</label>
              <Field id="email" type="email" name="email" placeholder="Email" className={css.input}/>
          </div>
          <div className={css.errorWrap}>
            <ErrorMessage name="email" component="div" className={css.error}/>
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="password" hidden>Password</label>
              <Field id="password" type="password" name="password" placeholder="Password" className={css.input}/>
            <div className={css.errorWrap}>
              <ErrorMessage name="password" component="div" className={css.error}/>
            </div>            
          </div>
          {isRegister && (
            <div className={css.inputWrap}>
              <label htmlFor="confirmPassword" hidden>Confirm password</label>
                <Field id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm password" className={css.input}/>
              <div className={css.errorWrap}>
                <ErrorMessage name="confirmPassword" component="div" className={css.error}/>
              </div>              
            </div>
          )}
          </div>
          <div className={css.btnContainer}>
            <Button type="submit" disabled={isSubmitting} className={css.button}>
                {isRegister ? 'Registration' : 'Login'}
            </Button>
            {isRegister 
              ? <p className={css.text}>Already have an account? <Link to="/login" className={css.link}>Login</Link></p>
              : <p className={css.text}>Don't have an account? <Link to="/register" className={css.link}>Register</Link></p>}
          </div>
          </Form>
      )}
    </Formik>
  );
}

export default AuthForm