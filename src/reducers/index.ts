import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import api from './api';
import messages from './messages';
import options from './options';

export const config = {
  key: 'root',
  storage,
  whitelist: ['messages', 'options'],
  timeout: 10000
};

const rootReducer = persistCombineReducers(config, {
  [api.reducerPath]: api.reducer,
  messages,
  options
});

export default rootReducer;