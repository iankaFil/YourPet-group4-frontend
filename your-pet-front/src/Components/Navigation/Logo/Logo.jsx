import { Link } from 'react-router-dom';
import OurLogo from '../../../logo.svg';

function Logo() {
  return (
    <Link to="/main">
      <img src={OurLogo} alt="YourPet logo" />
    </Link>
  );
}

export default Logo;
