import Header from 'Components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'Components/Loader/Loader';

const SharedLayout = () => {
    return (
        <>
            <Header />
            <main>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
            </main>
        </>
    );
};

export default SharedLayout;