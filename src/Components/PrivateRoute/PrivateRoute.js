import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLogin, getToken } from '../../Redux/Auth/auth-selector';


import { ColorRing } from 'react-loader-spinner';

const PrivateRoute = () => {
    const isUserLogin = useSelector(isLogin);
    const isToken = useSelector(getToken);

    if (!isUserLogin && isToken) {
        return <ColorRing width="70" height="70" />;
    }
    if (!isUserLogin && !isToken) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

export default PrivateRoute;