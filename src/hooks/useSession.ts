import { useSelector, shallowEqual } from 'react-redux';
import { sessionState } from 'state/reducers/sessionReducer';

const useSession = () =>
  useSelector(
    ({ session: { authenticated, user } }: { session: sessionState }) => ({
      authenticated,
      user
    }),
    shallowEqual
  );

export default useSession;
