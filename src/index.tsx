import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from 'components/App';

import './index.css';

import configureStore from 'state/store/configureStore.dev';
import { Provider } from 'react-redux';

import httpClient from 'httpClient';

import { PersistGate } from 'redux-persist/integration/react';
import applyDefaultInterceptors from 'httpClient/applyDefaultInterceptors';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;

const root = ReactDOMClient.createRoot(container);

const { persistor, store } = configureStore({});

applyDefaultInterceptors(store, httpClient);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
