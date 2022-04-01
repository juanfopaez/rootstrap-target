import React from 'react';

import 'components/styles/App.css';
import useSession from 'hooks/useSession';

import { signOut } from 'state/actions/userActions';
import useDispatch from 'hooks/useDispatch';

function App() {
  const { authenticated } = useSession();
  const logoutRequest = useDispatch(signOut);
  return (
    <div className="App">
      <button
        type="button"
        disabled={!authenticated}
        onClick={() => {
          logoutRequest({});
        }}
      >
        Logout
      </button>
      Rootstrap Target By Juan Forero
    </div>
  );
}

export default App;
