import React from 'react';

import { Navigate } from 'react-router-dom';

import { useSession } from 'hooks';

import routes from 'routes/routes';

import { PageWrapper, InfoSection } from 'components/common';

const SignUp = () => {
  const { authenticated } = useSession();

  if (authenticated) {
    return <Navigate to={routes.index.path} />;
  }
  /* TODO: ADD SIGN UP SCREEN LOGIC */
  return <PageWrapper left={<>TARGET MVD SignUp</>} right={<InfoSection />} />;
};

export default SignUp;
