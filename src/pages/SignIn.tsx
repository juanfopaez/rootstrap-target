import React from 'react';

import { Navigate } from 'react-router-dom';

import { SubmitHandler, useForm } from 'react-hook-form';
import useSession from 'hooks/useSession';
import useDispatch from 'hooks/useDispatch';
import useStatus from 'hooks/useStatus';

import { signIn } from 'state/actions/userActions';

import routes from 'routes/routes';
import PageWrapper from 'components/common/PageWrapper';
import InfoSection from 'components/common/InfoSection';
import InputField from 'components/common/InputField';
import BlackButton from 'components/common/BlackButton';

import Smilies from 'assets/images/smilies.svg';

import { PENDING } from 'constants/actionStatusConstants';

import { signInFields } from 'types/sessionTypes';

const SignIn = () => {
  const { authenticated } = useSession();
  const onSubmit = useDispatch(signIn);
  const requestStatus = useStatus(signIn);

  const { status, error } = requestStatus;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<signInFields>();

  const onSubmitForm: SubmitHandler<signInFields> = (data: signInFields) => {
    onSubmit({ user: data });
  };

  if (authenticated) {
    return <Navigate to={routes.index.path} />;
  }

  const isLoading = status === PENDING;

  const extractEmailErrors = () => {
    if (error) {
      return error;
    }
    if (errors.email) {
      return errors.email.message;
    }
    return '';
  };

  return (
    <PageWrapper>
      <>
        <div className="wrapper__left">
          <div className="signInWrapper">
            <img src={Smilies} alt="Target mvd logo" />
            <h2>Target mvd</h2>
            <h5>Find people near you & Connect</h5>
            <p>
              Create a target wherever on the map, specify your interest:
              Travel, Dating, Music, etc and start conecting with others who
              share your interest.
            </p>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <InputField
                label="email"
                id="email"
                register={register('email', {
                  required: 'Your email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format'
                  }
                })}
                error={extractEmailErrors()}
                type="email"
              />
              <InputField
                label="password"
                id="password"
                register={register('password', {
                  required: 'Your password is required'
                })}
                error={errors.password ? errors.password.message : ''}
                type="password"
              />
              <BlackButton type="submit" disabled={isLoading}>
                Sign in
              </BlackButton>
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

export default SignIn;
