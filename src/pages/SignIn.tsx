import React, { memo } from 'react';

import { Navigate } from 'react-router-dom';

import useSession from 'hooks/useSession';

import routes from 'components/routes/routes';
import PageWrapper from 'components/common/PageWrapper';
import InfoSection from 'components/common/InfoSection';
import InputField from 'components/common/InputField';

const SignIn = () => {
  const { authenticated } = useSession();

  if (authenticated) {
    return <Navigate to={routes.index.path} />;
  }

  return (
    <PageWrapper>
      <>
        <div>
          <InputField label="Name" value="red" />
        </div>
        <div>
          <InfoSection />
        </div>
      </>
    </PageWrapper>
  );
};

export default memo(SignIn);
