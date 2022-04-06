import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';

import useSession from 'hooks/useSession';

import routes from 'constants/routesPaths';

function Authentication() {
  const { authenticated } = useSession();

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  return <div>Authentication</div>;
}

export default memo(Authentication);
