import React from 'react';

import App from 'components/App';
import routes from 'routes/routes';

import { render, screen, fireEvent, waitFor } from 'utils/tests/testingRender';

import userService from 'services/userService';

jest.mock('services/userService');

describe('SignIn.tsx Tests', () => {
  beforeEach(() => {
    userService.signIn.mockResolvedValue({
      data: {}
    });
  });
  it('Render sign-in page if user uses /login as path', () => {
    render(<App />, { route: routes.signIn.path, initialState: {} });
    const linkElement = screen.getByText(/Target mvd/);
    expect(linkElement).toBeInTheDocument();
  });

  it('Form validation for empty fields :)', async () => {
    render(<App />, { route: routes.signIn.path, initialState: {} });
    screen.getByText(/Target mvd/);
    const submitButton = screen.getByText('Sign in');

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(userService.signIn).not.toHaveBeenCalled();
      expect(screen.getByText('Your email is required')).toBeInTheDocument();
      expect(screen.getByText('Your password is required')).toBeInTheDocument();
    });
  });

  it('Users should be able to fill fields up and call sign-in end point', async () => {
    render(<App />, { route: routes.signIn.path, initialState: {} });
    screen.getByText(/Target mvd/);
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');
    const submitButton = screen.getByText('Sign in');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(userService.signIn).toHaveBeenCalledWith({
        user: {
          email: 'test@test.com',
          password: 'password'
        }
      });
    });
  });

  it('Users should able to fill fields up and call sign-in end point and catch api errors', async () => {
    userService.signIn.mockRejectedValue({
      response: { data: { errors: ['hmmmm ops something went wrong'] } }
    });
    render(<App />, { route: routes.signIn.path, initialState: {} });
    screen.getByText(/Target mvd/);
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');
    const submitButton = screen.getByText('Sign in');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(userService.signIn).toHaveBeenCalledWith({
        user: {
          email: 'test@test.com',
          password: 'password'
        }
      });
      expect(
        screen.getByText('hmmmm ops something went wrong')
      ).toBeInTheDocument();
    });
  });
});
