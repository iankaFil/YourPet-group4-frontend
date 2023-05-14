import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import { newsReducer } from './news/news-slice';
import { friendsReducer } from './ourFriends/ourFriends-slice';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  news: newsReducer,
  friends: friendsReducer,
});
