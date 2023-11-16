import { render, waitFor } from '@testing-library/react';
import { Footer } from '@/components/footer';

const renderFooter = () => {
  const { getByTestId } = render(<Footer lng="en" />);

  return {
    getByTestId
  };
};

describe('test footer component', () => {
  test('should render copyright and logo', async () => {
    const { getByTestId } = renderFooter();

    await waitFor(() => {
      const logo = getByTestId('makaDev-logo');
      expect(logo).toBeInTheDocument();
    });

    await waitFor(() => {
      const copyrightText = getByTestId('copyright');
      expect(copyrightText).toBeInTheDocument();
    });
  });
});
