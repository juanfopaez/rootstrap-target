import React from 'react';

import HomePage from 'pages/Home';
import Authentication from 'pages/Authentication';
import NotFound from 'pages/NotFound';

import routesPaths from 'constants/routesPaths';

const routes = {
  index: {
    path: routesPaths.index,
    component: <HomePage />,
    exact: true,
    private: true
  },
  login: {
    path: routesPaths.login,
    component: <Authentication />
  },
  register: {
    path: routesPaths.register,
    component: <Authentication />
  },
  notFound: {
    component: <NotFound />
  }
};

export default routes;
