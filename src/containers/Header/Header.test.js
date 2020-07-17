import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Header from '.';

describe('Checkout cart component', () => {
  it('should be closed by default', () => {
    render(<Header />);
    expect(
      screen.queryByRole('button', { name: /checkout/i })
    ).not.toBeInTheDocument();
  });

  it('should be opened when clicked on the cart icon', () => {
    render(<Header />);
    userEvent.click(screen.getByAltText('cart'));
    expect(
      screen.queryByRole('button', { name: /checkout/i })
    ).toBeInTheDocument();
  });
});