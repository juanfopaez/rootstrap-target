import React from 'react';
import { render, screen } from 'tests/testingRender';

import PageWrapper from '../PageWrapper';

describe('PageWrapper.tsx Tets', () => {
  it('Should render left and right section', () => {
    render(
      <PageWrapper>
        <>
          <div>Left</div>
          <div>Right</div>
        </>
      </PageWrapper>
    );
    const leftElement = screen.getByText(/Left/);
    const rightElement = screen.getByText(/Right/);
    expect(leftElement).toBeInTheDocument();
    expect(rightElement).toBeInTheDocument();
  });

  it('Should render left section', () => {
    render(
      <PageWrapper>
        <div>Left</div>
      </PageWrapper>
    );
    const leftElement = screen.getByText(/Left/);
    const rightElement = screen.queryByText(/Right/);
    expect(leftElement).toBeInTheDocument();
    expect(rightElement).not.toBeInTheDocument();
  });
});
