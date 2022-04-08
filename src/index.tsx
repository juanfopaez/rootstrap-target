import React from 'react';

// @ts-ignore
import * as ReactDOMClient from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';

import './index.css';

import { Provider } from 'react-redux';
import configureStore from 'state/store/configureStore';

import httpClient from 'httpClient';

import { PersistGate } from 'redux-persist/integration/react';

import applyDefaultInterceptors from 'httpClient/applyDefaultInterceptors';

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;

const root = ReactDOMClient.createRoot(container);

const { persistor, store } = configureStore();

applyDefaultInterceptors(store, httpClient);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
