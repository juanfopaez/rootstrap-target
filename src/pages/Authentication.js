import React, { memo, useState } from 'react';
import { Redirect, useRouteMatch, Link } from 'react-router-dom';

import { useDispatch, useSession, useStatus } from 'hooks';
import AuthenticationForm from 'components/user/AuthenticationForm';
import { login, register } from 'state/actions/userActions';
import routes from 'constants/routesPaths';

function AuthenticationPage() {
  const { authenticated } = useSession();

  const isLogin = !!useRouteMatch(routes.login);
  const action = isLogin ? login : register;
  const onSubmit = useDispatch(action);
  const [values, setValues] = useState({ email: '', password: '' });
  const requestStatus = useStatus(action);

  if (authenticated) {
    return <Redirect to={routes.index} />;
  }

  const label = isLogin ? 'Log in' : 'Register';
  const waringText = isLogin
    ? 'If you do not have a user '
    : 'If you already have an account ';
  const actionText = isLogin ? 'register' : 'login';

  return (
    <div className="container col-md-4">
      <h3>{label}</h3>
      <AuthenticationForm
        isLogin={isLogin}
        onSubmit={onSubmit}
        values={values}
        setValues={setValues}
        requestStatus={requestStatus}
        submitLabel={label}
      />
      <div className="alert alert-warning">
        <strong>{waringText}</strong>
        {actionText} clicking{' '}
        <Link to={isLogin ? routes.register : routes.login}>here</Link>
      </div>
    </div>
  );
}

export default memo(AuthenticationPage);
