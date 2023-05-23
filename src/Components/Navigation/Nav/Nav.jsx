import { NavLink, useLocation } from 'react-router-dom';
import css from './Nav.module.css';

function Nav({ handleLinkClick }) {
  const location = useLocation();
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  const isNoticesActive = location.pathname.includes('/notices');

  return (
    <ul className={css.nav}>
      <li className={css.nav_item}>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : '')}
          to="/news"
          onClick={handleClick}
        >
          News
        </NavLink>
      </li>
      <li className={css.nav_item}>
        <NavLink
          className={isNoticesActive ? css.active : ''}
          to="/notices/sell"
          onClick={handleClick}
        >
          Notices
        </NavLink>
      </li>
      <li className={css.nav_item}>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : '')}
          to="/friends"
          onClick={handleClick}
        >
          Our Friends
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
