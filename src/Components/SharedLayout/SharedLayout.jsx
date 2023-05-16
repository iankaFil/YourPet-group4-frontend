import Header from 'Components/Header/Header';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const SharedLayout = () => {
    const navigate = useNavigate()
      useEffect(() => {
    navigate('/main');
      }, [navigate]);
    
    return (
        <>
        <Header />
        <Outlet />
        </>
    );
};

export default SharedLayout;