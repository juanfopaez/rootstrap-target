import React from 'react';

import 'components/styles/App.css';
import useSession from 'hooks/useSession';

import { signIn, signOut, signUp } from 'state/actions/userActions';
import useDispatch from 'hooks/useDispatch';

function App() {
  const { authenticated } = useSession();
  const signOutRequest = useDispatch(signOut);
  const signUpRequest = useDispatch(signUp);
  const signInRequest = useDispatch(signIn);
  return (
    <div className="App">
      <button
        type="button"
        disabled={!authenticated}
        onClick={() => {
          signOutRequest({});
        }}
      >
        Logout
      </button>
      <button
        type="button"
        disabled={authenticated}
        onClick={() => {
          signUpRequest({});
        }}
      >
        SignUp
      </button>
      <button
        type="button"
        disabled={authenticated}
        onClick={() => {
          signInRequest({});
        }}
      >
        SignIn
      </button>
      Rootstrap Target By Juan Forero
    </div>
  );
}

export default App;
