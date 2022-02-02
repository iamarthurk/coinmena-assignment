import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello world! text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello world!/i);
  expect(textElement).toBeInTheDocument();
});
