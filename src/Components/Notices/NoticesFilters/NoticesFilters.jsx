import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleNavLinkClick = event => {
    if (event.target.tagName === 'A') {
      handleChangeCategory(event.target.text);
    }
  };

  const handleLinkClick = () => {
    if (!isLoginUser) {
      toast.info(
        'You must be registered or logged in to perform the operation'
      );
      return;
    }
    navigate('/add-pet');
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
          {/* <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            onClick={handleFilterButtonClick}
            to="/notices/filter"
          > */}
          <button
            type="button"
            onClick={handleFilterButtonClick}
            // className={({ isActive }) => (isActive ? css.active : '')}
          >
            <p className={css.filterText}>Filter</p>
            <Filter />
          </button>

          {/* </NavLink> */}
          {isBurgerMenuOpen && <NoticesBurgerMenu />}
        </li>
        <li className={css.addButtonLink}>
          <button
            type="button"
            // className={({ isActive }) => (isActive ? css.active : '')}
            onClick={handleLinkClick}
          >
            <p className={css.addPetText}>Add pet</p>
            <PlusSmallIcon />
          </button>
        </li>
      </ul>
      <ToastContainer autoClose={1400} position="top-center" />
    </div>
  );
};

export default NoticesCategoriesNav;
