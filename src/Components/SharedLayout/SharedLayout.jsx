import Header from 'Components/Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
   
    return (
        <>
        <Header />
        <Outlet />
        </>
    );
};

export default SharedLayout;