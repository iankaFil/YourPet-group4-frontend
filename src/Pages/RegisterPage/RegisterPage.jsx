// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from 'Components/Header/Header';
// import Section from 'Components/Section/Section';
// import Container from 'Components/Container/Container';
import React from 'react';
import AuthForm from 'Components/AuthForm/AuthForm';
import ModalCongrats from './../../Components/ModalCongrats/ModalCongrats';
import Container from 'Components/Container/Container';

import styles from './RegisterPage.module.css';

const RegisterPage = () => {

  return (
    
    <div>
      
      <Container className={styles.section}>
        <h1 className={styles.login}>Registration</h1>
        <AuthForm />
      <p className={styles.exitRegistr}>Don't have an account? Register</p>
      <ModalCongrats />
      </Container>
      
    </div>
  );
};

export default RegisterPage;

 