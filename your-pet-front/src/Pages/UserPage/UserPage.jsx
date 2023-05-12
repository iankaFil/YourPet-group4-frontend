import React from 'react';

import Section from 'Components/Section';
import Container from 'Components/Container/';
import UserData from 'Components/UserData/UserData';

import styles from './UserPage.module.css';

const UserPage = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <UserData />
      </Container>
    </Section>
  );
};

export default UserPage;
