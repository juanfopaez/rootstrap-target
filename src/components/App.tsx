import React from 'react';

import useSession from 'hooks/useSession';

import { Route, Routes } from 'react-router-dom';

import routes, { routeType } from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const { authenticated } = useSession();

  return (
    <div className="app">
      <Routes>
        {Object.values(routes).map((route: routeType) =>
          route.private ? (
            <Route
              key={route.path}
              path={route.path}
              element={
                <PrivateRoute authenticated={authenticated}>
                  <Route {...route} />
                </PrivateRoute>
              }
            />
          ) : (
            <Route key={route.path} path={route.path} {...route} />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;
