import React, { useState } from 'react';

import Section from 'Components/Section';
import Container from 'Components/Container';
import UserData from 'Components/UserData';
import PetsData from 'Components/PetsData';

import styles from './UserPage.module.css'; 
import Modal from './../../Components/Modal/Modal';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <button onClick={handleOpenModal}>Open modal</button>
        {showModal && <Modal onClose={handleCloseModal}>
          <h2>Congrats!</h2>
          <p>Youre registration is success</p>
          <button>Go to profile</button>
        
        </Modal>}
        <UserData />
        <PetsData/>
      </Container>
    </Section>
  );
};

export default UserPage;
