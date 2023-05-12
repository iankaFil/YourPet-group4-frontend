import React from 'react';

import Section from 'Components/Section';
import Container from 'Components/Container';
import UserData from 'Components/UserData';
import PetsData from 'Components/PetsData';

import styles from './UserPage.module.css'; 

const UserPage = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <UserData />
        <PetsData/>
      </Container>
    </Section>
  );
};

export default UserPage;
