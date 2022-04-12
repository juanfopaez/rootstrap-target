import React from 'react';

import useDispatch from 'hooks/useDispatch';
import { signOut } from 'state/actions/userActions';

const HomePage = () => {
  const onLogout = useDispatch(signOut);
  return (
    <div>
      Home
      <button onClick={() => onLogout({})} type="button">
        Logout
      </button>
    </div>
  );
};

export default HomePage;
