import React from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
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

import { smilies } from 'assets';

import { actionStatus } from 'constants/actionStatusConstants';

import extractApiErrors from 'utils/extractApiErrors';

import { signInFields } from 'types/sessionTypes';

const SignIn = () => {
  const { authenticated } = useSession();
  const onSubmit = useDispatch(signIn);
  const requestStatus = useStatus(signIn);
  const navigate = useNavigate();

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

  return (
    <PageWrapper
      left={
        <div className="formWrapper">
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
              error={
                extractApiErrors({ apiErrors: error }) ||
                extractApiErrors({
                  apiErrors: error,
                  formErrors: errors,
                  errorToExtract: 'email'
                })
              }
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
          <div className="formWrapper__navigation_signin">
            <Button isInline type="button">
              Forgot your password?
            </Button>
            <Button isInline type="button">
              CONNECT WITH FACEBOOK
            </Button>
            <hr />
            <Button
              isInline
              onClick={(e) => {
                e.preventDefault();
                navigate(routes.signUp.path, { replace: true });
              }}
            >
              SIGN UP
            </Button>
          </div>
        </div>
      }
      right={<InfoSection />}
    />
  );
};

export default SignIn;
