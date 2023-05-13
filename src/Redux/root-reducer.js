// import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import authReducer from './Auth/auth-slice';
// import filterReducer from './filterSlice';

// const persistConfig = {
//     key: 'token',
//     storage,
//     whitelist: ['token'],
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// export const rootReducer = combineReducers({
//     auth: persistedAuthReducer,
//     filter: filterReducer,
// });