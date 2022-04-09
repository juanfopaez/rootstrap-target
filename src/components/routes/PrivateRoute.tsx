import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { bool, node } from 'prop-types';
import routes from './routes';

function PrivateRoute({
  children,
  authenticated
}: {
  children: React.ReactElement;
  authenticated: boolean;
}) {
  const location = useLocation();
  return authenticated ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: routes.signIn.path
      }}
      state={{ from: location }}
      replace
    />
  );
}

PrivateRoute.propTypes = {
  children: node.isRequired,
  authenticated: bool.isRequired
};

export default PrivateRoute;
