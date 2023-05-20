import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Section from 'Components/Section';
import Container from 'Components/Container';
import UserData from 'Components/UserData';
import PetsData from 'Components/PetsData';
import ModalCongrats from 'Components/ModalCongrats/ModalCongrats';
import Loader from 'Components/Loader/Loader';

import { getUser } from 'Redux/auth/auth-selectors';
import { updateUser } from 'Redux/auth/auth-operations';
import { fetchOwnPets } from 'Redux/pets/pets-operations';
import {
  getOwnPets,
  // getUserFromPets
} from './../../Redux/pets/pets-selectors';

import styles from './UserPage.module.css';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const user = useSelector(getUser);
  const pets = useSelector(getOwnPets)
  // console.log("PETS in UserPage", pets)
  // const userFormPets = useSelector(getUserFromPets)

  const dispatch = useDispatch();

  const { avatarURL, name, birthday, email, phone, city } = user;

  useEffect(() => {
    dispatch(fetchOwnPets());
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

    const handleSubmit = async (value ) => {
      try {
        await dispatch(updateUser(value));
        // console.log('VALUE==>', value);
    } catch (error) {
      console.log('Error updating user data:', error);
    }
  };

  const isLoadingUser = useSelector(state => state.auth.isLoading);

  if (isLoadingUser) {
    return <Loader />;
  }

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        {showModal && <ModalCongrats onClose={handleCloseModal} />}
        <UserData
          photo={avatarURL}
          name={name}
          birthday={birthday}
          email={email}
          phone={phone}
          city={city}
          handleClick={handleSubmit}
        />
        {pets?.length && <PetsData pets={pets} />}
      </Container>
    </Section>
  );
};

export default UserPage;
