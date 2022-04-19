import React from 'react';

import { PageWrapper, InfoSection, InputField, Button } from 'components';

import { Navigate, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSession, useDispatch, useStatus } from 'hooks';

import { signUpFields } from 'types/sessionTypes';
import { signUp } from 'state/actions/userActions';

import { actionStatus } from 'constants/actionStatusConstants';

import routes from 'routes/routes';
import SelectField from 'components/common/SelectField';
import genders from 'constants/genderTypes';
import extractApiErrors from 'utils/extractApiErrors';

const SignUp = () => {
  const { authenticated } = useSession();
  const onSubmit = useDispatch(signUp);
  const requestStatus = useStatus(signUp);
  const navigate = useNavigate();

  const { status, error } = requestStatus;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<signUpFields>();

  const passwordCurrentValue = watch('password', '');

  const onSubmitForm: SubmitHandler<signUpFields> = (data: signUpFields) => {
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
          <h2>SIGN UP</h2>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <InputField
              label="name"
              id="username"
              autoComplete="off"
              register={register('username', {
                required: 'Your name is required'
              })}
              error={extractApiErrors({
                apiErrors: error,
                formErrors: errors,
                errorToExtract: 'username'
              })}
              type="text"
            />
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
              error={extractApiErrors({
                apiErrors: error,
                formErrors: errors,
                errorToExtract: 'email'
              })}
              type="email"
            />
            <InputField
              label="password"
              id="password"
              placeholder="MIN. 6 CHARACTERS LONG"
              register={register('password', {
                required: 'Your password is required',
                minLength: { value: 6, message: 'Min. 6 characters long' }
              })}
              error={extractApiErrors({
                apiErrors: error,
                formErrors: errors,
                errorToExtract: 'password'
              })}
              type="password"
            />
            <InputField
              label="confirm password"
              id="password_confirmation"
              register={register('password_confirmation', {
                required: 'Your password confirmation is required',
                validate: (value) =>
                  value === passwordCurrentValue || 'The passwords do not match'
              })}
              error={extractApiErrors({
                apiErrors: error,
                formErrors: errors,
                errorToExtract: 'password'
              })}
              type="password"
            />
            <SelectField
              label="gender"
              id="gender"
              register={register('gender', {
                required: 'Your gender is required'
              })}
              error={errors.gender ? errors.gender.message : ''}
              defaultValue=""
            >
              <option value="" disabled>
                SELECT YOUR GENDER
              </option>
              {Object.values(genders).map((gender) => (
                <option key={gender.value} value={gender.value}>
                  {gender.text}
                </option>
              ))}
            </SelectField>
            <Button type="submit" disabled={isLoading}>
              Sign Up
            </Button>
          </form>
          <div className="formWrapper__navigation_signup">
            <hr />
            <Button
              isInline
              onClick={(e) => {
                e.preventDefault();
                navigate(routes.signIn.path, { replace: true });
              }}
            >
              SIGN IN
            </Button>
          </div>
        </div>
      }
      right={<InfoSection />}
    />
  );
};

export default SignUp;
