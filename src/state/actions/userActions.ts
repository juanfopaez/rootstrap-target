import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { infoType, signInFields, signUpFields } from 'types/sessionTypes';
import userService from 'services/userService';

import parseError from 'utils/parseError';

export const signIn = createAsyncThunk(
  'user/login',
  async (userInput: signInFields, { rejectWithValue }) => {
    try {
      const { data } = await userService.signIn(userInput);
      return data;
    } catch ({ response: { data } }) {
      return rejectWithValue(parseError(data));
    }
  }
);

export const signUp = createAsyncThunk(
  'user/register',
  async (userInput: signUpFields, { rejectWithValue }) => {
    try {
      const { data } = await userService.signUp(userInput);
      return data;
    } catch ({ response: { data } }) {
      return rejectWithValue(parseError(data));
    }
  }
);

export const updateSession = createAction<infoType | undefined>(
  'session/update'
);
export const signOut = createAction('user/logout');

export const { fulfilled: signInFulfilled, rejected: signInRejected } = signIn;
export const { fulfilled: signUpFulfilled, rejected: signUpRejected } = signUp;
