import { createReducer } from '@reduxjs/toolkit';

import { actionStatus } from 'constants/actionStatusConstants';

const DELIMITER = '/';

const getActionKey = (type: any) => {
  const getType = type.split(DELIMITER);
  getType.pop();
  return getType.join(DELIMITER);
};

export default createReducer({}, (builder) => {
  builder
    .addMatcher(
      ({ type }) => type.endsWith(`/${actionStatus.REJECTED}`),
      (state: any, action: any) => {
        state[getActionKey(action.type)] = {
          status: actionStatus.REJECTED,
          error: action.payload
        };
      }
    )
    .addMatcher(
      ({ type }) => type.endsWith(`/${actionStatus.FULFILLED}`),
      (state: any, { type }) => {
        state[getActionKey(type)] = { status: actionStatus.FULFILLED };
      }
    )
    .addMatcher(
      ({ type }) => type.endsWith(`/${actionStatus.PENDING}`),
      (state: any, { type }) => {
        state[getActionKey(type)] = { status: actionStatus.PENDING };
      }
    )
    .addMatcher(
      ({ type }) => type.endsWith(`/${actionStatus.RESET}`),
      (state: any, { type }) => {
        delete state[getActionKey(type)];
        return state;
      }
    )
    .addDefaultCase(() => {});
});
