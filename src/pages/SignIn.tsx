import React from 'react';

import { Navigate } from 'react-router-dom';

import { SubmitHandler, useForm } from 'react-hook-form';

import { useSession, useDispatch, useStatus } from 'hooks';

import { signIn } from 'state/actions/userActions';

import routes from 'routes/routes';

import {
  PageWrapper,
  InfoSection,
  InputField,
  Button
} from 'components/common';

import { smilies } from 'assets/images';

import { actionStatus } from 'constants/actionStatusConstants';

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

  const isLoading = status === actionStatus.PENDING;

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
      <div className="wrapper__left">
        <div className="signInWrapper">
          <img src={smilies} alt="Target mvd logo" />
          <h2>Target mvd</h2>
          <h5>Find people near you & Connect</h5>
          <p>
            Create a target wherever on the map, specify your interest: Travel,
            Dating, Music, etc and start conecting with others who share your
            interest.
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
            <Button type="submit" disabled={isLoading}>
              Sign in
            </Button>
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
    </PageWrapper>
  );
};

export default SignIn;
