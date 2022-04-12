import routes from 'components/routes/routes';
import React from 'react';
import { render, screen } from 'utils/tests/testingRender';

import App from 'components/App';

describe('SignIn.jsx Tests', () => {
  it('Render login page if user uses /login as path', () => {
    render(<App />, { route: routes.signIn.path, initialState: {} });
    const linkElement = screen.getByText(/Target mvd/);
    expect(linkElement).toBeInTheDocument();
  });
});
