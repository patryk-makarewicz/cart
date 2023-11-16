import { render, waitFor } from '@testing-library/react';
import { Header } from '@/components/header';
import { ReduxProvider } from '@/redux/redux-provider';

jest.mock('next/navigation', () => ({
  usePathname() {
    return '';
  }
}));

const renderHeader = () => {
  const { getByTestId } = render(
    <ReduxProvider>
      <Header lng="en" />
    </ReduxProvider>
  );

  return {
    getByTestId
  };
};

describe('test header component', () => {
  test('should render elements', async () => {
    const { getByTestId } = renderHeader();

    await waitFor(() => {
      const logo = getByTestId('makaDev-logo');
      expect(logo).toBeInTheDocument();
    });

    await waitFor(() => {
      const navigation = getByTestId('navigation');
      expect(navigation).toBeInTheDocument();
    });

    await waitFor(() => {
      const cartButton = getByTestId('cart-button');
      expect(cartButton).toBeInTheDocument();
    });

    await waitFor(() => {
      const lngButton = getByTestId('lng-button');
      expect(lngButton).toBeInTheDocument();
    });
  });
});
