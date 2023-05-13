import { Link } from 'react-router-dom';
import OurLogo from '../SvgIcons/logo.svg';
import css from './Logo.module.css';

function Logo() {
  return (
    <Link to="/main">
      <img className={css.logo} src={OurLogo} alt="YourPetLogo" />
    </Link>
  );
}

export default Logo;
