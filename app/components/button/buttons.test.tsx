import { render } from '@testing-library/react';
import React from 'react';

import { ButtonProps } from './button';
import Button from './button';

const renderButton = ({ children = 'Click me' }: Partial<ButtonProps> = {}) => {
  const { getByText, getByTestId } = render(<Button>{children}</Button>);

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
