import React from 'react';

import useSession from 'hooks/useSession';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import routes, { routeType } from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const { authenticated } = useSession();

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
