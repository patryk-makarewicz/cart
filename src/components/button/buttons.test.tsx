import { render } from '@testing-library/react';
import React from 'react';

import { Button, ButtonProps } from './button';

const renderButton = ({ label = 'Click me' }: Partial<ButtonProps> = {}) => {
  const { getByText, getByTestId } = render(<Button label={label} />);

  return {
    getByText,
    getByTestId
  };
};

describe('test button component', () => {
  it('should render label', () => {
    const { getByText } = renderButton();

    const Label = getByText('Click me');
    expect(Label).toBeInTheDocument();
  });
});
