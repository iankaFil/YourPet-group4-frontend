import React from 'react';
import css from './Backdrop.module.css';
import { Link } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav';
import Nav from '../Nav/Nav';
import Logo from 'Components/Logo/Logo';

const BackdropMenu = ({ isOpen, handleClose }) => {
  return (
    <>
      {isOpen && (
        <div className={css.backdrop}>
          <div className={css.menu}>
            <button className={css.btn} onClick={handleClose}>
              x
            </button>
            <Logo />
            <div className={css.backdrop_auth}>
              <AuthNav />
            </div>

            <div className={css.backdrop_nav}>
              <Nav />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BackdropMenu;
