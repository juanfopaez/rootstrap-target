import React from 'react';
import { render, screen } from 'utils/tests/testingRender';

import InputField from '../InputField';

describe('InputField.tsx Tets', () => {
  it('Should render input field component', () => {
    render(
      <form>
        <InputField label="Input test" defaultValue="hehe" id="input-test" />
      </form>
    );
    const input = screen.getByLabelText('Input test') as HTMLInputElement;
    expect(input.value).toBe('hehe');
  });
  it('Should render input field component with error', () => {
    render(
      <form>
        <InputField
          label="Input test"
          defaultValue="hehe"
          id="input-test"
          error="ops error :("
        />
      </form>
    );
    const input = screen.getByLabelText('Input test') as HTMLInputElement;
    const error = screen.getByText(/ops error/);

    expect(input.value).toBe('hehe');
    expect(error).toBeInTheDocument();
  });
});
