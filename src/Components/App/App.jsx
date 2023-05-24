import './App.module.css';
import UserRoutes from 'Components/UserRoutes';
// import { useEffect } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { current } from 'Redux/auth/auth-operations';
// import { isUserLogin, getUser } from 'Redux/auth/auth-selectors';

function App() {
  // const dispatch = useDispatch();
  // const isLogin = useSelector(isUserLogin);

  // const user = useSelector(getUser);

  //import React, { useEffect } from 'react';
  //import { useDispatch, useSelector } from 'react-redux';
  //import { current } from 'Redux/auth/auth-operations';
  //import UserRoutes from 'Components/UserRoutes';
  //import Loader from 'Components/Loader/Loader';

  //function App() {
  //const dispatch = useDispatch();
  //const isLoading = useSelector(state => state.auth.isLoading);

  // useEffect(() => {
  //   if (isLogin && Object.keys(user).length === 0) {
  //     console.log(' ВЫЗЫВАЮ DISPATCH CURRENT isLogin', isLogin);
  //     dispatch(current());
  //   }
  //   // dispatch(current());
  // }, [dispatch, isLogin, user]);

  //return <>{isLoading ? <Loader /> : <UserRoutes />}</>;
  return <UserRoutes />;
}

export default App;
