import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import reducer from 'state/reducers';

export default (initialState: any, _?: boolean) => {
  const store = configureStore({
    reducer,
    preloadedState: initialState
  });

  if (_) {
    return { store };
  }

  const persistor = persistStore(store);

  return { store, persistor };
};
