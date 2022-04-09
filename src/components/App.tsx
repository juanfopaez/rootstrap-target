import React from 'react';

import useSession from 'hooks/useSession';

import { Route, Routes } from 'react-router-dom';

import styles from 'styles/General.module.scss';

import routes, { routeType } from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  const { authenticated } = useSession();

  return (
    <div className={styles.app}>
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
            <Route key={route.path} {...route} />
          )
        )}
      </Routes>
    </div>
  );
};

export default App;
