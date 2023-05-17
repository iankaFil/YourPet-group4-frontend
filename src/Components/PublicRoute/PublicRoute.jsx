import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getToken, isUserLogin } from 'Redux/auth/auth-selectors';
import { useEffect } from 'react';

// import Loader from 'Components/Loader/Loader';

const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);
  const isToken = useSelector(getToken);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLogin) {
      if (location.pathname === '/login') {
        navigate('/user', { state: { from: '/login' } });
      } else {
        navigate('/user');
      }
    }
  }, [isLogin, location.pathname, navigate]);

  if (!isLogin && isToken) {
    return <p>...Loading</p>;
    // <Loader/>   
  }

  return <Outlet />;
};

export default PublicRoute;