import React from 'react';
import { render, screen } from 'tests/testingRender';

import App from '../App';

describe('App.js Tets', () => {
  it('Render login page if user uses /login as path', () => {
    render(<App />, { route: '/login', initialState: {} });
    const linkElement = screen.getByText(/Authentication/);
    expect(linkElement).toBeInTheDocument();
  });

  it('Render Notfound page if user uses an unexpected path', () => {
    render(<App />, {
      route: '/rannnndommm',
      initialState: {}
    });
    const linkElement = screen.getByText(/404 page not found/);
    expect(linkElement).toBeInTheDocument();
  });
});
