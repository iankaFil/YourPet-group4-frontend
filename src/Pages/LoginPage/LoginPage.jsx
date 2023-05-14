
import React from 'react';

import AuthForm from 'Components/AuthForm/AuthForm';
import Section from 'Components/Section/Section';
import Container from 'Components/Container/Container';

const LoginPage = () => {
  return (
    <Section>
      <Container>
        <AuthForm /> 
      </Container>
    </Section>
  );
};

export default LoginPage;