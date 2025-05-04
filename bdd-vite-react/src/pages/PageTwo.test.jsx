import React from 'react';
import { render, screen } from '@testing-library/react';
import PageTwo from './PageTwo';
import '@testing-library/jest-dom';

jest.mock('../services/sharedService', () => ({
  useSharedService: () => ({
    getMessage: () => 'Shared service message!'
  })
}));

jest.mock('../services/mockDataService', () => ({
  getMockData: () => ([
    { id: 1, name: 'Test Name', value: 'Test Value' }
  ])
}));

test('renders Page Two with shared service message', () => {
  render(<PageTwo />);

  expect(screen.getByText('Page Two')).toBeInTheDocument();
  expect(screen.getByText('Shared service message!')).toBeInTheDocument();
  expect(screen.getByTestId('get-data')).toHaveTextContent('Get Data in ways that are not fragile');
});
