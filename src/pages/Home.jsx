import React from 'react';

import useSession from 'hooks/useSession';

import routes from 'constants/routesPaths';
import { Redirect } from 'react-router-dom';

function HomePage() {
  const { authenticated } = useSession();
  if (!authenticated) {
    return <Redirect to={routes.login} />;
  }
  return <div>Home</div>;
}

export default HomePage;
