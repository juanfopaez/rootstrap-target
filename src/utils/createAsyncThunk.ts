import {
  createAsyncThunk,
  createAction,
  AsyncThunkOptions,
  AsyncThunkPayloadCreator
} from '@reduxjs/toolkit';

import { RESET } from 'constants/actionStatusConstants';

export default (
  type: string,
  payload: AsyncThunkPayloadCreator<unknown, void, {}>,
  options: AsyncThunkOptions<void, {}> | undefined
) => {
  const thunk = createAsyncThunk(type, payload, options);
  /* tslint:disable-next-line */
  // @ts-ignore: Unreachable code error
  thunk.reset = createAction(`${type}/${RESET}`);
};
