import React from 'react';

import { render, screen, fireEvent, waitFor } from 'utils/tests/testingRender';

import routes from 'routes/routes';

import Header from '../Header';

describe('Header.tsx Tests', () => {
  it('Should render header', () => {
    render(<Header />);
    const MenuIcon = screen.getByAltText('open menu');
    expect(MenuIcon).toBeInTheDocument();
  });

  it('Should show options when users do click and redirect to about', async () => {
    render(<Header />);
    const MenuIcon = screen.getByAltText('open menu');
    fireEvent.click(MenuIcon);

    await waitFor(() => {
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('About'));
    expect(window.location.pathname).toBe(routes.about.path);
  });

  it('Should show options when users do click and redirect to contact', async () => {
    render(<Header />);
    const MenuIcon = screen.getByAltText('open menu');
    fireEvent.click(MenuIcon);

    await waitFor(() => {
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Contact'));
    expect(window.location.pathname).toBe(routes.contact.path);
  });
});
