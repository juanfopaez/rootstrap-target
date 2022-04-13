import React, { memo } from 'react';

import { Navigate } from 'react-router-dom';

import useSession from 'hooks/useSession';

import routes from 'routes/routes';
import PageWrapper from 'components/common/PageWrapper';
import InfoSection from 'components/common/InfoSection';

const SignUp = () => {
  const { authenticated } = useSession();

  if (authenticated) {
    return <Navigate to={routes.index.path} />;
  }

  return (
    <PageWrapper>
      <>
        <div>TARGET MVD SignUp</div>
        <div>
          <InfoSection />
        </div>
      </>
    </PageWrapper>
  );
};

export default memo(SignUp);
