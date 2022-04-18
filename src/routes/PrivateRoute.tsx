import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import routes from './routes';

interface Props {
  children: React.ReactElement;
  authenticated: boolean;
}

const PrivateRoute = ({ children, authenticated }: Props) => {
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
};

export default PrivateRoute;
