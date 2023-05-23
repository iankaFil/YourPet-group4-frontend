
import './App.module.css';
import UserRoutes from 'Components/UserRoutes';
// import { useEffect } from 'react';

// import { useDispatch } from 'react-redux';
// import { current } from 'Redux/auth/auth-operations';

function App() {
  // const dispatch = useDispatch();

//import React, { useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { current } from 'Redux/auth/auth-operations';
//import UserRoutes from 'Components/UserRoutes';
//import Loader from 'Components/Loader/Loader';

//function App() {
  //const dispatch = useDispatch();
  //const isLoading = useSelector(state => state.auth.isLoading);


  // useEffect(() => {
  //   dispatch(current());
  // }, [dispatch]);

  //return <>{isLoading ? <Loader /> : <UserRoutes />}</>;
  return <UserRoutes />;
}

export default App;
