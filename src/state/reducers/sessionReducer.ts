import { createSlice } from '@reduxjs/toolkit';
import {
  signInFulfilled,
  signUpFulfilled,
  signOut,
  updateSession
} from 'state/actions/userActions';

export interface infoType {
  token?: string;
  uid?: string;
  client?: string;
}

export interface sessionState {
  authenticated: boolean;
  user: null;
  info: infoType;
}

const initialState = {
  authenticated: false,
  user: null,
  info: {
    token: ''
  }
};
const fulfilledReducer = (state: sessionState, { payload }: any) => {
  state.user = payload;
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [signInFulfilled.toString()]: fulfilledReducer,
    [signUpFulfilled.toString()]: fulfilledReducer,
    [signOut.toString()]: () => initialState,
    [updateSession.toString()]: (state: sessionState, { payload }: any) => {
      state.info = payload;
      state.authenticated = true;
    }
  },
  reducers: {}
});

export default sessionSlice.reducer;
