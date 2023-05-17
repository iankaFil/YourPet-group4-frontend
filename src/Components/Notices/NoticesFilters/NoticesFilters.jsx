import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import css from 'Components/Notices/NoticesFilters/NoticesFilters.module.css';

import { isUserLogin } from 'Redux/auth/auth-selectors';

const NoticesCategoriesNav = ({ handleCategory }) => {
  const isLoginUser = useSelector(isUserLogin);

  const handleNavLinkClick = event => {
    if (event.target.tagName === 'A') {
      handleCategory(event.target.text);
    }
  };

  return (
    <div className={css.navigationContainer}>
      <ul className={css.linksContainer} onClick={handleNavLinkClick}>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/sell"
          >
            sell
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/lost-found"
          >
            lost/found
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/for-free"
          >
            in good hands
          </NavLink>
        </li>
        {isLoginUser && (
          <li className={css.link}>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : '')}
              to="/notices/favorite"
            >
              favorite ads
            </NavLink>
          </li>
        )}
        {isLoginUser && (
          <li className={css.link}>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : '')}
              to="/notices/own"
            >
              my ads
            </NavLink>
          </li>
        )}
      </ul>

      <ul className={css.addButtonContainer}>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/filter"
          >
            filter
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/add-pet"
          >
            Add Pet
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
