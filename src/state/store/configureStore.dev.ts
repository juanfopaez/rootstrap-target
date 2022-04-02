import { createLogger } from 'redux-logger';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import lodash from 'lodash';

import { configureStore } from '@reduxjs/toolkit';

import reducer from 'state/reducers';

// eslint-disable-next-line no-unused-vars
export default (initialState: any, _?: boolean) => {
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, { type }) => !lodash.startsWith(type, '@@router')
  });

  const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }).concat(logger),
    devTools: true
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
