import React, { memo } from 'react';

import { Navigate } from 'react-router-dom';

import useSession from 'hooks/useSession';

import routes from 'components/routes/routes';
import PageWrapper from 'components/common/PageWrapper';

function Authentication() {
  const { authenticated } = useSession();

  if (authenticated) {
    return <Navigate to={routes.index.path} />;
  }

  return (
    <PageWrapper>
      <>
        <div>Left part</div>
        <div>Rigth part</div>
      </>
    </PageWrapper>
  );
}

export default memo(Authentication);
