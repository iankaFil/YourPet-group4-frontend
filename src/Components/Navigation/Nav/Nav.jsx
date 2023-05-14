import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

function Nav() {
  return (
    <ul className={css.nav}>
      <li className={css.nav_item}>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : '')}
          to="/news"
        >
          News
        </NavLink>
      </li>
      <li className={css.nav_item}>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : '')}
          to="/notices"
        >
          Notices
        </NavLink>
      </li>
      <li className={css.nav_item}>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : '')}
          to="/friends"
        >
          Our Friends
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
