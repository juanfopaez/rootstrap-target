import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { infoType } from 'types/sessionTypes';
import userService from 'services/userService';

import parseError from 'utils/parseError';

export const signIn = createAsyncThunk('user/login', async (userInput) => {
  try {
    const { data } = await userService.signIn(userInput);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const signUp = createAsyncThunk('user/register', async (userInput) => {
  try {
    const { data } = await userService.signUp(userInput);
    return data;
  } catch ({ response: { data } }) {
    throw parseError(data);
  }
});

export const updateSession = createAction<infoType | undefined>(
  'session/update'
);
export const signOut = createAction('user/logout');

export const { fulfilled: signInFulfilled, rejected: signInRejected } = signIn;
export const { fulfilled: signUpFulfilled, rejected: signUpRejected } = signUp;
