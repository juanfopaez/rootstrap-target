import React from 'react';
import { render, screen } from 'utils/tests/testingRender';

import InfoSection from '../InfoSection';

describe('InfoSection.tsx Tests', () => {
  it('Should render left and right section', () => {
    render(<InfoSection />);
    const playIcon = screen.getByAltText('Play');
    const iphone6Image = screen.getByAltText('Iphone 6 app example');
    expect(iphone6Image).toBeInTheDocument();
    expect(playIcon).toBeInTheDocument();
  });
});
