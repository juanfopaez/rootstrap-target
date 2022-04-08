import React from 'react';

import HomePage from 'pages/Home';
import Authentication from 'pages/Authentication';
import NotFound from 'pages/NotFound';

import routesPaths from 'constants/routesPaths';

export interface routeType {
  path: string;
  element: React.ReactElement;
  private?: boolean;
}

export interface routeElementType {
  [key: string]: routeType;
}

const routes: routeElementType = {
  index: {
    path: routesPaths.index,
    element: <HomePage />,
    private: true
  },
  login: {
    path: routesPaths.login,
    element: <Authentication />
  },
  register: {
    path: routesPaths.register,
    element: <Authentication />
  },
  notFound: {
    path: '*',
    element: <NotFound />
  }
};

export default routes;
