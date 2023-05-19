// import React, { useState, useEffect } from 'react';
import Section from 'Components/Section';
import Container from 'Components/Container/';
import Background from 'Components/Background/Background';
// import Loader from 'Components/Loader/Loader';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Section className={css.section}>
      <Background />
      <Container className={css.wrapp}>
        <h1 className={css.title}>
          Take good care {'\n'}of your small {'\n'}pets
        </h1>
      </Container>
    </Section>
  );
};

export default HomePage;
