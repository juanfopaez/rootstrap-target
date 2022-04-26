import React from 'react';

import App from 'components/App';
import routes from 'routes/routes';

import { render, screen, fireEvent, waitFor } from 'utils/tests/testingRender';

import userService from 'services/userService';

jest.mock('services/userService');

describe('SignUp.jsx Tests', () => {
  beforeEach(() => {
    (userService.signUp as jest.MockedFunction<any>).mockResolvedValue({
      data: {}
    });
  });
  it('Render sign-up page if user uses /register as path', () => {
    render(<App />, {
      route: routes.signUp.path,
      initialState: {}
    });
    const linkElement = screen.getByText(/SIGN UP/);
    expect(linkElement).toBeInTheDocument();
  });

  it('Form validation for empty fields :)', async () => {
    render(<App />, { route: routes.signUp.path, initialState: {} });
    screen.getByText(/SIGN UP/);
    const submitButton = screen.getByText('Sign Up');

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(userService.signUp).not.toHaveBeenCalled();
      expect(screen.getByText('Your name is required')).toBeInTheDocument();
      expect(screen.getByText('Your email is required')).toBeInTheDocument();
      expect(screen.getByText('Your password is required')).toBeInTheDocument();
      expect(
        screen.getByText('Your password confirmation is required')
      ).toBeInTheDocument();
      expect(screen.getByText('Your gender is required')).toBeInTheDocument();
    });
  });

  it('Users should be able to fill fields up and call sign-up end point', async () => {
    render(<App />, { route: routes.signUp.path, initialState: {} });
    screen.getByText(/SIGN UP/);

    const nameInput = screen.getByLabelText('name');
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');
    const passwordConfirmationInput = screen.getByLabelText('confirm password');
    const genderSelect = screen.getByLabelText('gender');
    const submitButton = screen.getByText('Sign Up');

    fireEvent.change(nameInput, { target: { value: 'test' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: 'password' }
    });
    fireEvent.change(genderSelect, { target: { value: 'male' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(userService.signUp).toHaveBeenCalledWith({
        user: {
          email: 'test@test.com',
          gender: 'male',
          password: 'password',
          password_confirmation: 'password',
          username: 'test'
        }
      });
    });
  });

  it('Users should able to fill fields up and call sign-up end point and catch api errors', async () => {
    (userService.signUp as jest.MockedFunction<any>).mockRejectedValue({
      response: {
        data: {
          errors: {
            email: ['is wrong :(']
          }
        }
      }
    });
    render(<App />, { route: routes.signUp.path, initialState: {} });
    screen.getByText(/SIGN UP/);

    const nameInput = screen.getByLabelText('name');
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');
    const passwordConfirmationInput = screen.getByLabelText('confirm password');
    const genderSelect = screen.getByLabelText('gender');
    const submitButton = screen.getByText('Sign Up');

    fireEvent.change(nameInput, { target: { value: 'test' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(passwordConfirmationInput, {
      target: { value: 'password' }
    });
    fireEvent.change(genderSelect, { target: { value: 'male' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(userService.signUp).toHaveBeenCalledWith({
        user: {
          email: 'test@test.com',
          gender: 'male',
          password: 'password',
          password_confirmation: 'password',
          username: 'test'
        }
      });
      expect(screen.getByText('Email is wrong :(')).toBeInTheDocument();
    });
  });
});
