import React from 'react';
import { useState } from 'react';
import BurgerSvg from '../../menu-hamburger.svg';
import css from './Burger.module.css';
import Modal from 'Components/Modal/Modal';

function BurgerMenu() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <>
      <button className={css.burger} onClick={handleOpenModal}>
        <img src={BurgerSvg} alt="Menu" />
      </button>
      {showModal && (
        <Modal onClose={handleCloseModal}>Тут може бути ваша реклама</Modal>
      )}
    </>
  );
}

export default BurgerMenu;
