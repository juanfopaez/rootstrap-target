import React, { memo } from 'react';

import { Navigate } from 'react-router-dom';

import useSession from 'hooks/useSession';

import Smilies from 'assets/images/smilies.svg';

import routes from 'components/routes/routes';
import PageWrapper from 'components/common/PageWrapper';
import InfoSection from 'components/common/InfoSection';
import InputField from 'components/common/InputField';
import BlackButton from 'components/common/BlackButton';

const SignIn = () => {
  const { authenticated } = useSession();

  if (authenticated) {
    return <Navigate to={routes.index.path} />;
  }

  return (
    <PageWrapper>
      <>
        <div className="wrapper__left">
          <div className="signInWrapper">
            <img src={Smilies} alt="smilies" />
            <h2>Target mvd</h2>
            <h5>Find people near you & Connect</h5>
            <p>
              Create a target wherever on the map, specify your interest:
              Travel, Dating, Music, etc and start conecting with others who
              share your interest.
            </p>
            <form>
              <InputField id="email" label="Email" defaultValue="" />
              <InputField
                id="password"
                label="Password"
                type="password"
                defaultValue=""
              />
              <BlackButton type="button">Sign in</BlackButton>
            </form>
            <div className="signInWrapper__navigation">
              <a href="#">Forgot your password?</a>
              <a href="#">Connect with Facebook</a>
              <hr />
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
        <div className="wrapper__right">
          <InfoSection />
        </div>
      </>
    </PageWrapper>
  );
};

export default memo(SignIn);
