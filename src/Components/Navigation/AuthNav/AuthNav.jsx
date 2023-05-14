import React from 'react';
import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';
import { ReactComponent as Paw } from '../../SvgIcons/paw.svg';

const isAuth = true;

function AuthNav() {
  return (
    <>
      {!isAuth ? null : (
        <div className={css.auth}>
          <Link to="/login" className={css.authButton}>
            <span className={css.auth_text}>Log IN</span>
            <Paw className={css.svg} />
          </Link>
          <Link to="/register" className={css.authButton}>
            <span className={css.auth_text}>Registration</span>
          </Link>
        </div>
      )}
    </>
  );
}

export default AuthNav;
