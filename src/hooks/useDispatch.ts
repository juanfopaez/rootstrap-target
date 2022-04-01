import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default (action: any, ...dependencies: any) => {
  const dispatch = useDispatch();
  return useCallback(
    (payload) => dispatch(action(payload)),
    [dispatch, action, ...dependencies]
  );
};
