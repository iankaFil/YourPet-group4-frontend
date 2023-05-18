import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Button from 'Components/Button/Button';

import { registrationValidationSchema, loginValidationSchema } from './../../Shared/validation/authValidation';

import { EyeClosedIcon } from 'Components/SvgIcons';
import { EyeOpenIcon } from 'Components/SvgIcons';
import { CrossSmallIcon } from 'Components/SvgIcons';
import {ConfirmIcon} from 'Components/SvgIcons/ConfirmIcon';

import css from './AuthForm.module.css'

const AuthForm = ({ isRegister, onSubmit }) => {
  const validationSchema = isRegister ? registrationValidationSchema : loginValidationSchema;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passworConfirmdVisible, setPasswordConfirmVisible] = useState(false);
 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordConfirmVisibility = () => {
    setPasswordConfirmVisible(!passworConfirmdVisible);
  };

  const clearInput = (fieldName, setFieldValue) => {
  setFieldValue(fieldName, '');
};

const hasFieldError = (errors, fieldName) => errors[fieldName];
const isFieldValid = (errors, fieldName) => !errors[fieldName];


  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched, setFieldValue }) => (
        <Form className={`${css.form} ${isRegister ? css.register : css.login}`}>
          <div className={css.inputContainer}>
            {isRegister ? <h2 className={css.title}>Registration</h2> : <h2 className={css.title}>Login</h2>}
            <div className={css.inputWrap}>
            <label htmlFor="email" hidden>Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className={`${css.input} ${touched.email && errors.email && css.errorInput}`}
              />
              {touched.email && hasFieldError(errors, 'email') && <CrossSmallIcon id='svg' className={css.crossIcon} onClick={() => clearInput('email', setFieldValue)} />}
              {touched.email && isFieldValid(errors, 'email') && <ConfirmIcon id='svg' className={css.confirmIcon} />}
          </div>
          <div className={css.errorWrap}>
            <ErrorMessage name="email" component="div" className={css.error}/>
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="password" hidden>Password</label>
              <Field
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className={`${css.input} ${touched.password && !errors.password && css.successInput} ${touched.password && errors.password && css.errorInput}`}
              />
                {passwordVisible ?
                <EyeOpenIcon id='svg' onClick={ togglePasswordVisibility} className={css.eyeIcon}/> :
                <EyeClosedIcon id='svg' onClick={togglePasswordVisibility} className={css.eyeIcon} />} 
              {touched.password && !errors.password ? (
                  <div className={css.successMessage}>Password is secure</div>
              ) : (
                  <div className={css.errorWrap}>
              <ErrorMessage name="password" component="div" className={css.error}/>
                  </div>
                )}   
          </div>
          {isRegister && (
            <div className={css.inputWrap}>
              <label htmlFor="confirmPassword" hidden>Confirm password</label>
                <Field
                  id="confirmPassword"
                  type={passworConfirmdVisible ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className={`${css.input} ${touched.confirmPassword && !errors.confirmPassword && css.successInput} ${touched.confirmPassword && errors.confirmPassword && css.errorInput}`}
                />
                {passworConfirmdVisible ?
                <EyeOpenIcon id='svg' onClick={ togglePasswordConfirmVisibility} className={css.eyeIcon}/> :
                <EyeClosedIcon id='svg' onClick={ togglePasswordConfirmVisibility} className={css.eyeIcon}/>}
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