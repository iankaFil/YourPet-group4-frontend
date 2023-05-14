
import React from 'react';

import AuthForm from 'Components/AuthForm/AuthForm';
import Section from 'Components/Section/Section';
import Container from 'Components/Container/Container';

const RegisterPage = () => {
  return (
    <Section>
      <Container>
        <AuthForm isRegister />
      </Container>
    </Section>
  );
};

export default RegisterPage;
