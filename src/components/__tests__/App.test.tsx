import React from 'react';
import { render, screen } from 'utils/testingRender';

import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rootstrap Target By Juan Forero/);
  expect(linkElement).toBeInTheDocument();
});
