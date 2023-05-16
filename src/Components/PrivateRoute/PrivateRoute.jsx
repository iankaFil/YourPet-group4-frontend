import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getToken, isUserLogin } from 'Redux/auth/auth-selectors';

// import Loader from 'Components/Loader/Loader';

const PrivateRoute = () => {
  const isLogin = useSelector(isUserLogin);
  const isToken = useSelector(getToken);

  if (!isLogin && isToken) {
    <p>...Loading</p>;
    // return <Loader />;
  }
  if (!isLogin && !isToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
