import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';

import App from 'Components/App/App';
// import { store } from 'Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  < React.StrictMode >
    < BrowserRouter basename="/YourPet-group4-frontend" >
      <App />
    </BrowserRouter >
  </React.StrictMode >

);