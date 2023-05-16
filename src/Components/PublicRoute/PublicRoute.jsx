import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from 'Redux/auth/auth-selectors';
import { useEffect } from 'react';

const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLogin) {
      if (location.pathname === '/register') {
        navigate('/user', { state: { from: '/register' } });
      } else {
        navigate('/user');
      }
    }
  }, [isLogin, location.pathname, navigate]);

  if (!isLogin) {
   return <Outlet />;
  }

  
};

export default PublicRoute;