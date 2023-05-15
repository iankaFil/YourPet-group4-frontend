import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Section from 'Components/Section';
import Container from 'Components/Container';
import UserData from 'Components/UserData';
import PetsData from 'Components/PetsData';
import Modal from './../../Components/Modal/Modal';

import { current } from './../../Redux/auth/auth-operations';
import {getUser} from 'Redux/auth/auth-selectors';

import styles from './UserPage.module.css';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [previousPathname, setPreviousPathname] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(checkError);

  const { avatarURL, name, birthday, email, phone, city } = user;
 

 
  useEffect(() => { 
    setPreviousPathname(location.pathname);
    dispatch(current());
      
  }, [dispatch, location]);

  console.log(previousPathname)
  
  // useEffect(() => {
  //   if (location.pathname === '/register') {
      
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // }, [location]);

  // function handleOpenModal() {
  //   setShowModal(true);
  // }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        {/* <button onClick={handleOpenModal}>Open modal</button> */}
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <h2>Congrats!</h2>
            <p>Youre registration is success</p>
            <button>Go to profile</button>
          </Modal>
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