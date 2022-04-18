import React from 'react';
import { render, screen } from 'utils/tests/testingRender';

import Button from '../Button';

describe('Button.tsx Tests', () => {
  it('Should render BlackButton', () => {
    render(<Button type="button">Click me!</Button>);
    const button = screen.getByText('Click me!');
    expect(button).toBeInTheDocument();
  });
});
