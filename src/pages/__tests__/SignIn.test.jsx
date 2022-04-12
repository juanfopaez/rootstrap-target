import routes from 'components/routes/routes';
import React from 'react';
import { render, screen, fireEvent } from 'utils/tests/testingRender';

import App from 'components/App';

describe('SignIn.jsx Tests', () => {
  it('Render sign-in page if user uses /login as path', () => {
    render(<App />, { route: routes.signIn.path, initialState: {} });
    const linkElement = screen.getByText(/Target mvd/);
    expect(linkElement).toBeInTheDocument();
  });

  it('Users able to fill fields up and call sign-in end point', () => {
    render(<App />, { route: routes.signIn.path, initialState: {} });
    screen.getByText(/Target mvd/);
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');
    const submitButton = screen.getByText('Sign in');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(emailInput.value).toBe('test@test.com');
    expect(passwordInput.value).toBe('password');
  });
});
