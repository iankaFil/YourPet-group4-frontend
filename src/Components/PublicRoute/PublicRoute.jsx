import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getToken, isUserLogin } from 'Redux/auth/auth-selectors';

// import Loader from 'Components/Loader/Loader';

const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);
  const isToken = useSelector(getToken);
  const navigate = useNavigate();
  const location = useLocation();

  if (!isLogin && isToken) {
    <p>...Loading</p>;
    // return <Loader />;
  }
  if (isLogin) {
    if (location.pathname === '/register') {
      navigate('/user', { state: { from: '/register' } });
    } else {
      return <Navigate to="/user" />;
    }
  }
  return <Outlet />;
};

export default PublicRoute;
