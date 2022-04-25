import React from 'react';

import App from 'components/App';

import routes from 'routes/routes';

import { render, screen, fireEvent } from 'utils/tests/testingRender';
import initialState from 'mocks/initialState';

describe('About.tsx Tests', () => {
  it('Render about page if user uses /about as path', () => {
    render(<App />, { route: routes.about.path, initialState: {} });
    const linkElement = screen.getByText(/What's TARGET/);
    expect(linkElement).toBeInTheDocument();
  });

  it('Should redirect to sign-in if user is not authenticated and do click on get started button', () => {
    render(<App />, { route: routes.about.path, initialState: {} });
    const linkElement = screen.getByText(/What's TARGET/);

    expect(linkElement).toBeInTheDocument();

    fireEvent.click(screen.getByText('Get started!'));

    expect(window.location.pathname).toBe(routes.signIn.path);
  });

  it('Should redirect to index(home) if user is authenticated and do click on get started button', () => {
    render(<App />, {
      route: routes.about.path,
      initialState: { ...initialState }
    });
    const linkElement = screen.getByText(/What's TARGET/);

    expect(linkElement).toBeInTheDocument();

    fireEvent.click(screen.getByText('Get started!'));

    expect(window.location.pathname).toBe(routes.index.path);
  });
});
