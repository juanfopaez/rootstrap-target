import React from 'react';

import { render, screen } from 'utils/tests/testingRender';

import Contact from '../Contact';

describe('Contact.tsx Tests', () => {
  it('Render contact', () => {
    render(<Contact />);

    const title = screen.getByText(/Don't be shy/);

    expect(title).toBeInTheDocument();
  });
});
