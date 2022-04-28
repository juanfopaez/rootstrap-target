import React from 'react';

import { useSession } from 'hooks';

import { Route, Routes } from 'react-router-dom';

import routes, { routeType } from 'routes/routes';
import PrivateRoute from 'routes/PrivateRoute';

import 'scss/index.scss';

import { Header } from 'components/common';

const App = () => {
  const { authenticated } = useSession();
  return (
    <div className="app">
      <Header />
      <Routes>
        {Object.values(routes).map((route: routeType) =>
          route.private ? (
            <Route
              key={route.path}
              {...route}
              element={
                <PrivateRoute authenticated={authenticated}>
                  {route.element}
                </PrivateRoute>
              }
            />
          ) : (
            <Route key={route.path} {...route} />
          )
        )}
      </Routes>
    </div>
  );
};

export default App;
