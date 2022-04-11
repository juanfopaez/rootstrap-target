import { createReducer } from '@reduxjs/toolkit';

import {
  FULFILLED,
  REJECTED,
  PENDING,
  RESET
} from 'constants/actionStatusConstants';

const DELIMITER = '/';

const getActionKey = (type: any) => {
  const getType = type.split(DELIMITER);
  getType.pop();
  return getType.join(DELIMITER);
};

export default createReducer({}, (builder) => {
  builder
    .addMatcher(
      ({ type }) => type.endsWith(`/${REJECTED}`),
      (state: any, { type, error }) => {
        state[getActionKey(type)] = { status: REJECTED, error: error.message };
      }
    )
    .addMatcher(
      ({ type }) => type.endsWith(`/${FULFILLED}`),
      (state: any, { type }) => {
        state[getActionKey(type)] = { status: FULFILLED };
      }
    )
    .addMatcher(
      ({ type }) => type.endsWith(`/${PENDING}`),
      (state: any, { type }) => {
        state[getActionKey(type)] = { status: PENDING };
      }
    )
    .addMatcher(
      ({ type }) => type.endsWith(`/${RESET}`),
      (state: any, { type }) => {
        delete state[getActionKey(type)];
        return state;
      }
    )
    .addDefaultCase(() => {});
});
