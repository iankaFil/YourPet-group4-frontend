import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as PlusSmallIcon } from '../../SvgIcons/SmallIconPlus.svg';
import { ReactComponent as Filter } from '../../SvgIcons/Filter.svg';
import css from 'Components/Notices/NoticesFilters/NoticesFilters.module.css';
import NoticesBurgerMenu from '../NoticesBurgerMenu/NoticesBurgerMenu';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { isUserLogin } from 'Redux/auth/auth-selectors';

const NoticesCategoriesNav = ({ handleChangeCategory }) => {
  const isLoginUser = useSelector(isUserLogin);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleNavLinkClick = event => {
    if (event.target.tagName === 'A') {
      handleChangeCategory(event.target.text);
    }
  };

  const handleLinkClick = event => {
    if (!isLoginUser) {
      toast.info(
        'You must be registered or logged in to perform the operation'
      );
      return;
    }
  };

  const handleFilterButtonClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
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
        <li className={css.filterLink}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            onClick={handleFilterButtonClick}
            to="/notices/filter"
          >
            Filter
            <Filter />
          </NavLink>
          {isBurgerMenuOpen && <NoticesBurgerMenu />}
        </li>
        <li className={css.addButtonLink}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            onClick={handleLinkClick}
            to="/notices/add-pet"
          >
            Add pet
            <PlusSmallIcon />
          </NavLink>
        </li>
      </ul>
      <ToastContainer autoClose={1400} position="top-center" />
    </div>
  );
};

export default NoticesCategoriesNav;
