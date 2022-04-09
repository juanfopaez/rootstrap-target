import React from 'react';

import HomePage from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import NotFound from 'pages/NotFound';

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
    path: '/',
    element: <HomePage />,
    private: true
  },
  signIn: {
    path: '/login',
    element: <SignIn />
  },
  signUp: {
    path: '/register',
    element: <SignUp />
  },
  notFound: {
    path: '*',
    element: <NotFound />
  }
};

export default routes;
