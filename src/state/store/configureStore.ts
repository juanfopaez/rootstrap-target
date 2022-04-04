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

const logger = createLogger({
  collapsed: true,
  predicate: (getState, { type }) => !lodash.startsWith(type, '@@router')
});

const store = configureStore({
  reducer,
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger),
  devTools: true
});

export default () => {
  const persistor = persistStore(store);
  return { store, persistor };
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
