import humps from 'humps';

import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { EnhancedStore } from '@reduxjs/toolkit';

const ACCESS_TOKEN = 'access-token';
const UID = 'UID';
const CLIENT = 'client';

const UNAUTHORIZED = 401;

export default (store: EnhancedStore, client: AxiosInstance) => {
  client.interceptors.request.use((config: AxiosRequestConfig) => {
    const { info } = store.getState().session;
    const { data, headers } = config;
    if (info) {
      const { token, _client, uid } = info;
      config.headers = {
        ...headers,
        [ACCESS_TOKEN]: token,
        client: _client,
        uid
      };
    }
    config.data = data ? humps.camelizeKeys(data) : {};
    return config;
  });

  client.interceptors.response.use(
    async (response: AxiosResponse) => {
      const { headers, data } = response;
      const token = headers[ACCESS_TOKEN];
      if (token) {
        const session = {
          token,
          uid: headers[UID],
          client: headers[CLIENT]
        };
        // TODO: Update session stored in redux
        // eslint-disable-next-line no-console
        console.log(session);
      }
      response.data = humps.camelizeKeys(data);
      return response;
    },
    (error: AxiosError) => {
      if (error.response && error.response.status === UNAUTHORIZED) {
        // eslint-disable-next-line no-console
        console.log(`Error: ${error.response}`);
        // TODO: Remove all user data from redux (logout)
      }
      return Promise.reject(error);
    }
  );
};
