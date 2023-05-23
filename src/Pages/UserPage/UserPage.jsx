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
import { current, updateUser } from 'Redux/auth/auth-operations';
import { fetchDeletePet, fetchOwnPets } from 'Redux/pets/pets-operations';
import { getOwnPets } from './../../Redux/pets/pets-selectors';

import styles from './UserPage.module.css';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const user = useSelector(getUser);
  const pets = useSelector(getOwnPets);
  const isLoadingUser = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch();

  const { name, birthday, email, phone, city } = user;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([dispatch(current()), dispatch(fetchOwnPets())]);
      } catch (error) {
        // Обработка ошибок
      }
    };
    fetchData();
    // dispatch(current());
    // dispatch(fetchOwnPets());
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

  if (isLoadingUser) {
    return <Loader />;
  }

  const handleSubmit = async value => {
    try {
      await dispatch(updateUser(value));
    } catch (error) {
      console.log('Error updating user data:', error);
    }
  };

  const handleDeletePet = async _id => {
    dispatch(fetchDeletePet(_id));
    console.log('DELETE PET', _id);
  };

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        {showModal && <ModalCongrats onClose={handleCloseModal} />}
        <UserData
          name={name}
          birthday={birthday}
          email={email}
          phone={phone}
          city={city}
          handleClick={handleSubmit}
        />
        <PetsData pets={pets} removePet={handleDeletePet} />
      </Container>
    </Section>
  );
};

export default UserPage;
