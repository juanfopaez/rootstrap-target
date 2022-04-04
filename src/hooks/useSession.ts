import { useSelector, shallowEqual } from 'react-redux';

import { sessionState } from 'constants/types';

const useSession = () =>
  useSelector(
    ({ session: { authenticated, user } }: { session: sessionState }) => ({
      authenticated,
      user
    }),
    shallowEqual
  );

export default useSession;
