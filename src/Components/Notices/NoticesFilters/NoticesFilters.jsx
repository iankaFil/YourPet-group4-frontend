import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from 'Components/Notices/NoticesFilters/NoticesFilters.module.css';

function NoticesCategoriesNav() {
  const [activeNavLink, setActiveNavLink] = useState('');

  const handleNavLinkClick = navLink => {
    setActiveNavLink(navLink);
  };

  return (
    <div className={css.navigationContainer}>
      <ul className={css.linksContainer}>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/sell"
            onClick={() => handleNavLinkClick('sell')}
          >
            sell
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/lost-found"
            onClick={() => handleNavLinkClick('lost-found')}
          >
            lost/found
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/for-free"
            onClick={() => handleNavLinkClick('in-good-hand')}
          >
            in good hands
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/favorite"
            onClick={() => handleNavLinkClick('favorite')}
          >
            favorite ads
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/own"
            onClick={() => handleNavLinkClick('own')}
          >
            my ads
          </NavLink>
        </li>
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
}

export default NoticesCategoriesNav;
