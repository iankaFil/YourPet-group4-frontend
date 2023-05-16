
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AuthForm from 'Components/AuthForm/AuthForm';
import Section from 'Components/Section/Section';
import Container from 'Components/Container/Container';
import { login } from 'Redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();
 
  const dispatch = useDispatch();

  const handleLogin = async ({email, password}, { setSubmitting }) => {
      const data = {email, password} 
    try {
        // await dispatch(login(data));
        const result = await dispatch(login(data));
        navigate('/user', {state:{from: '/login'}})
        setToken(result.token) 
      } catch (error) { 
        console.log(error.message); 
      }  
      setSubmitting(false); 
    }
 
  return (
    <Section>
      <Container>
        <AuthForm onSubmit={handleLogin}/> 
      </Container>
    </Section>
  );
};

export default LoginPage;