import React from 'react';
import { render, screen } from 'utils/tests/testingRender';

import PageWrapper from '../PageWrapper';

describe('PageWrapper.tsx Tests', () => {
  it('Should render left and right section', () => {
    render(<PageWrapper left={<div>Left</div>} right={<div>Right</div>} />);
    const leftElement = screen.getByText(/Left/);
    const rightElement = screen.getByText(/Right/);
    expect(leftElement).toBeInTheDocument();
    expect(rightElement).toBeInTheDocument();
  });

  it('Should render left section', () => {
    render(<PageWrapper left={<div>Left</div>} />);
    const leftElement = screen.getByText(/Left/);
    const rightElement = screen.queryByText(/Right/);
    expect(leftElement).toBeInTheDocument();
    expect(rightElement).not.toBeInTheDocument();
  });
});
