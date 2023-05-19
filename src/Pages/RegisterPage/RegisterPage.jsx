import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Background from 'Components/Background/Background';
import AuthForm from 'Components/AuthForm/AuthForm';
import Section from 'Components/Section/Section';
import Container from 'Components/Container/Container';
import Loader from 'Components/Loader/Loader';
import { signup } from 'Redux/auth/auth-operations';
import { isLoading, checkError } from 'Redux/auth/auth-selectors';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(checkError);
  const [submissionError, setSubmissionError] = useState(null);

  const handleSubmit = async ({ email, password }, { setSubmitting }) => {
    const data = { email, password };

    try {
      await dispatch(signup(data));
      navigate('/user', { state: { from: '/register' } });
    } catch (error) {
      setSubmissionError(error);
      console.log('Something went wrong', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading && !error) {
    return <Loader />;
  }

  return (
    <Section className={css.section}>
      <Background />
      <Container>
        <AuthForm isRegister onSubmit={handleSubmit} />
        {submissionError && <div>Error: {submissionError.message}</div>}
      </Container>
    </Section>
  );
};

export default RegisterPage;
