import { screen, render } from '@testing-library/react';
import ProductCard from './product-card';

describe('ProductCard', () => {
  it('should render', () => {
    render(<ProductCard />);

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });
});
