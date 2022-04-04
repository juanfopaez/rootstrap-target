import { useSelector, shallowEqual } from 'react-redux';

import { sessionState } from 'types/sessionTypes';

const useSession = () =>
  useSelector(
    ({ session: { authenticated, user } }: { session: sessionState }) => ({
      authenticated,
      user
    }),
    shallowEqual
  );

export default useSession;
