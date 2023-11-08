import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Button, ButtonProps } from './button';

const renderButton = ({ children = 'Click me' }: Partial<ButtonProps> = {}) => {
  const onHandleClick = jest.fn();
  const { getByText, getByTestId } = render(<Button onClick={onHandleClick}>{children}</Button>);

  return {
    getByText,
    getByTestId,
    onHandleClick
  };
};

describe('test button component', () => {
  it('should render label', () => {
    const { getByText } = renderButton();

    const ButtonLabel = getByText('Click me');
    expect(ButtonLabel).toBeInTheDocument();
  });

  it('should call handle onClick', () => {
    const { getByText, onHandleClick } = renderButton();

    const Button = getByText('Click me');
    expect(Button).toBeInTheDocument();

    fireEvent.click(Button);
    expect(onHandleClick).toHaveBeenCalledTimes(1);
  });
});
