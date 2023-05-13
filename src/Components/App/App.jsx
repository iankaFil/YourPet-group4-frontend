import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import UserRoutes from 'Components/UserRoutes';
import UserPage from 'Pages/UserPage/UserPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      <UserRoutes />
      <UserPage />
    </div>
  );
};

export default App;
