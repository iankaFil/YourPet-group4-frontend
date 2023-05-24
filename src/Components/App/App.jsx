import './App.module.css';
import UserRoutes from 'Components/UserRoutes';
import { useEffect } from 'react';

import {useDispatch} from 'react-redux';
import { current } from 'Redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current())
  },[dispatch])

  return <UserRoutes />;
}

export default App;
