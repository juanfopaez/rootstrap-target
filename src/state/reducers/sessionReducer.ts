import { createSlice } from '@reduxjs/toolkit';
import { sessionState } from 'types/sessionTypes';
import {
  signInFulfilled,
  signUpFulfilled,
  signOut,
  updateSession
} from 'state/actions/userActions';

const initialState: sessionState = {
  authenticated: false,
  user: {
    email: '',
    uid: '',
    provider: '',
    firstName: '',
    lastName: '',
    username: '',
    gender: '',
    pushToken: '',
    allowPasswordChange: false
  },
  info: {
    token: '',
    client: ''
  }
};

const fulfilledReducer = (state: sessionState, { payload }: any) => {
  state.user = payload.data;
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
