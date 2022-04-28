import React from 'react';

import Contact from 'pages/Contact';

import { render, screen } from 'utils/tests/testingRender';

describe('Contact.tsx Tests', () => {
  it('Render contact', () => {
    render(<Contact />);

    const title = screen.getByText(/Don't be shy/);

    expect(title).toBeInTheDocument();
  });
});
