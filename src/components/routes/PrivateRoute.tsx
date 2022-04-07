import React from 'react';

import routes from 'constants/routesPaths';

import { Navigate, useLocation } from 'react-router-dom';

import { bool, node } from 'prop-types';

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
        pathname: routes.login
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
