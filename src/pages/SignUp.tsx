import React, { memo } from 'react';

import { Navigate } from 'react-router-dom';

import { useSession } from 'hooks';

import routes from 'routes/routes';

import { PageWrapper, InfoSection } from 'components/common';

const SignUp = () => {
  const { authenticated } = useSession();

  if (authenticated) {
    return <Navigate to={routes.index.path} />;
  }

  return (
    <PageWrapper>
      {/* TODO: ADD SIGN UP SCREEN LOGIC */}
      <div className="wrapper__left">TARGET MVD SignUp</div>
      <div className="wrapper__right">
        <InfoSection />
      </div>
    </PageWrapper>
  );
};

export default memo(SignUp);
