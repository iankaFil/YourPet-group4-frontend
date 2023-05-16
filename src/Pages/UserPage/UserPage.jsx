import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Section from 'Components/Section';
import Container from 'Components/Container';
import UserData from 'Components/UserData';
import PetsData from 'Components/PetsData';
import ModalCongrats from './../../Components/ModalCongrats/ModalCongrats';

import { current } from './../../Redux/auth/auth-operations';
import {getUser} from 'Redux/auth/auth-selectors';

import styles from './UserPage.module.css';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);  
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const { avatarURL, name, birthday, email, phone, city } = user;

  useEffect(() => { 
    dispatch(current());  
  }, [dispatch]);

  useEffect(() => { 
    const storedFrom = sessionStorage.getItem('from');

    if (!storedFrom && location.state?.from === '/register') {
      setShowModal(true);
      sessionStorage.setItem('from', location.pathname);
    }  
  }, [location.pathname, location.state?.from]);

  function handleCloseModal() {
    setShowModal(false);
  } 

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        {showModal && (
          <ModalCongrats
            onClose={handleCloseModal}>
          </ModalCongrats>
        )}
        <UserData
          photo={avatarURL}
          name={name}
          birthday={birthday}
          email={email}
          phone={phone}
          city={city}
        />
        <PetsData />
      </Container>
    </Section>
  );
};

export default UserPage;