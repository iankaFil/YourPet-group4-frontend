import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from 'Components/Background/Background';
import AuthForm from 'Components/AuthForm/AuthForm';
import Section from 'Components/Section/Section';
import Container from 'Components/Container/Container';
import { login } from 'Redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import { isUserLogin } from 'Redux/auth/auth-selectors';

import css from './LoginPage.module.css';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }, { setSubmitting }) => {
    const data = { email, password };
    try {
      await dispatch(login(data));
    } catch (error) {
      console.log(error.message);
    }
    setSubmitting(false);
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/user', { state: { from: '/login' } });
    }
  }, [isLogin, navigate]);

  return (
    <Section className={css.section}>
      <Background />
      <Container>
        <AuthForm onSubmit={handleLogin} />
      </Container>
    </Section>
  );
};

export default LoginPage;
