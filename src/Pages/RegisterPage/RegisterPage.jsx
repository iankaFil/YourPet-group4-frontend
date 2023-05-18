import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthForm from 'Components/AuthForm/AuthForm';
import Section from 'Components/Section/Section';
import Container from 'Components/Container/Container';

import { signup } from 'Redux/auth/auth-operations';

import css from './RegisterPage.module.css'

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { setSubmitting }) => {
    const data = { email, password };

    try {
      await dispatch(signup(data));
      navigate('/user', { state: { from: '/register' } });
    } catch (error) {
      console.log(error, 'Something went wrong');
    }
    setSubmitting(false);
  };

  return (
    <Section className={css.section}>
      <Container>
        <AuthForm isRegister onSubmit={handleSubmit} />
      </Container>
    </Section>
  );
};

export default RegisterPage;
