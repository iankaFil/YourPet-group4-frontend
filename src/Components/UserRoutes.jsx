import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { NotFound } from 'Components/NotFound/NotFound';
import { ColorRing } from 'react-loader-spinner';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('../Pages/NewsPage/NewsPage'));
const OurFriendsPage = lazy(() =>
  import('../Pages/OurFriendsPage/OurFriendsPage')
);
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const AddPetPage = lazy(() => import('../Pages/AddPetPage/AddPetPage'));

const UserPage = lazy(() => import('../Pages/UserPage/UserPage'));
const NoticesPage = lazy(() => import('../Pages/NoticesPage/NoticesPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<ColorRing width="70" height="70" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/find-pet" element={<NoticesPage />} />
        <Route path="/our-friends" element={<OurFriendsPage />} />

        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<UserPage />}>
            <Route path="/add-pet" element={<AddPetPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
