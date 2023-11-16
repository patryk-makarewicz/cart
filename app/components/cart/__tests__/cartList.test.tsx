import { render, waitFor } from '@testing-library/react';

import { CartList } from '@/components/cart/cartList';

export const mockCartList = [
  {
    id: 'recOOCGhyxR83tpnt',
    createdTime: '2021-11-03T11:06:10.000Z',
    fields: {
      imageAlt: 'About the Pizza',
      price: 99.99,
      imageSrc:
        'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'food',
      bestseller: 'false',
      featured: 'false',
      details: 'null',
      name: 'Pizza from mocks',
      recommendations: 'false',
      currency: 'USD',
      description:
        'It is said that the development of Lamborghini cars arose from a discussion between sports car enthusiast Ferrucci Lamborghini (1916–1993) and Enzo Ferrari. Lamborghini, which was then only successfully producing tractors at the time, was dissatisfied with his Ferrari and offered Enzo Ferrari to make design changes.',
      dimensionsWidth: 1020,
      dimensionsHeight: 1020,
      size: 1500
    },
    quantity: 1
  }
];

const renderCartList = () => {
  const handleAddToCart = jest.fn();
  const handleRemoveFromCart = jest.fn();

  const { getByText, getByTestId } = render(
    <CartList
      cart={mockCartList}
      lng="en"
      isSending={false}
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  );

  return {
    getByText,
    getByTestId,
    handleAddToCart,
    handleRemoveFromCart
  };
};

describe('test CartList component', () => {
  test('should render cart list', async () => {
    const { getByText } = renderCartList();

    await waitFor(() => {
      const itemName = getByText(/Pizza from mocks/);
      expect(itemName).toBeInTheDocument();

      const itemPrice = getByText(/99.99/);
      expect(itemPrice).toBeInTheDocument();
    });
  });
});
