import React from 'react';
import { render, screen } from 'utils/tests/testingRender';

import BlackButton from '../BlackButton';

describe('BlackButton.tsx Tets', () => {
  it('Should render BlackButton', () => {
    render(<BlackButton type="button">Click me!</BlackButton>);
    const button = screen.getByText('Click me!');
    expect(button).toBeInTheDocument();
  });
});
