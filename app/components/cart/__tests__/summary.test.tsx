import { fireEvent, render, waitFor } from '@testing-library/react';

import { Summary } from '@/components/cart/summary';
import { mockCartList } from '@/components/cart/__tests__/cartList.test';

const renderSummary = () => {
  const resetCart = jest.fn();
  const handleSendCart = jest.fn();

  const { getByText, getByTestId } = render(
    <Summary cart={mockCartList} lng="en" isSending={false} resetCart={resetCart} handleSendCart={handleSendCart} />
  );

  return {
    getByText,
    getByTestId,
    resetCart,
    handleSendCart
  };
};

describe('test Summary component', () => {
  test('should render total price and numbers of items', async () => {
    const { getByText } = renderSummary();

    await waitFor(() => {
      const numberOfItems = getByText(/Items in cart: 1/);
      expect(numberOfItems).toBeInTheDocument();

      const totalPrice = getByText(/Total price: 99.99/);
      expect(totalPrice).toBeInTheDocument();
    });
  });

  test('should call resetCart and remove items from cart', async () => {
    const { getByTestId, resetCart } = renderSummary();

    await waitFor(() => {
      const resetCartButton = getByTestId('reset-cart-button');
      expect(resetCartButton).toBeInTheDocument();

      fireEvent.click(resetCartButton);
      expect(resetCart).toHaveBeenCalledTimes(1);
    });
  });

  test('should call handleSendCart and submit cart', async () => {
    const { getByTestId, handleSendCart } = renderSummary();

    await waitFor(() => {
      const submitButton = getByTestId('submit-cart-button');
      expect(submitButton).toBeInTheDocument();

      fireEvent.click(submitButton);
      expect(handleSendCart).toHaveBeenCalledTimes(1);
    });
  });
});
