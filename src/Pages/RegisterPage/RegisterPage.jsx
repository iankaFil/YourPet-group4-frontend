import React from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Background from 'Components/Background/Background';
import AuthForm from 'Components/AuthForm/AuthForm';
import Section from 'Components/Section/Section';
import Container from 'Components/Container/Container';
import Loader from 'Components/Loader/Loader';
import  { useState } from 'react';

import { signup } from 'Redux/auth/auth-operations';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async ({ email, password }, { setSubmitting }) => {
    const data = { email, password };

    try {
      setIsLoading(true);
      await dispatch(signup(data));
      navigate('/user', { state: { from: '/register' } });
    } catch (error) {
      setError(error);
      console.log(error, 'Something went wrong');
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  if (isLoading && !error) {
    return <Loader />;
  }

  return (
    <Section className={css.section}>
      <Background />
      <Container>
        <AuthForm isRegister onSubmit={handleSubmit} />
        {/* {isLoading && !error && <Loader />} */}
      </Container>
    </Section>
  );
};

export default RegisterPage;