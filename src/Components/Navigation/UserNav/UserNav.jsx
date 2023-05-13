import React from 'react';
import { Link } from 'react-router-dom';
import UserLogo from '../../SvgIcons/user-icon.svg';
import css from './UserNav.module.css';

const name = 'Anna';
const isMobile = true;

function UserNav() {
  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <Link to="/user">
            <img className={css.icon} src={UserLogo} alt="User logo" />
            {!isMobile ? null : <span className={css.name}>{name}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserNav;
