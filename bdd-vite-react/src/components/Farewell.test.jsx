import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Farewell from './Farewell';

describe('Farewell component', () => {
  it('renders the farewell message with name and message', () => {
    render(<Farewell name="Alice" message="See you soon!" />);
    expect(screen.getByText('Goodbye, Alice!')).toBeInTheDocument();
    expect(screen.getByText('See you soon!')).toBeInTheDocument();
  });
});
