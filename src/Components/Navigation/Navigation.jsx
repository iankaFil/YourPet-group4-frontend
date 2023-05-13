import React from 'react';
import Nav from './Nav/Nav';
import UserNav from './UserNav/UserNav';
import AuthNav from './AuthNav/AuthNav';
import BurgerMenu from './Burger/Burger';
import css from './Navigation.module.css';

const isLogIn = true;

function isMobileDevice() {
  return (
    window.innerWidth < 1024 ||
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}

function Navigation() {
  const isMobile = isMobileDevice();

  return (
    <>
      {isMobile ? null : <Nav />}
      <div className={css.btn_group}>
        {isLogIn ? <UserNav /> : <AuthNav />}
        {isMobile ? <BurgerMenu /> : null}
      </div>
    </>
  );
}

export default Navigation;
