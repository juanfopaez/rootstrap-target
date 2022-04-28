import React from 'react';

import { Home, SignIn, SignUp, NotFound, About } from 'pages';

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
    element: <Home />,
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
  about: {
    path: '/about',
    element: <About />
  },
  notFound: {
    path: '*',
    element: <NotFound />
  }
};

export default routes;
