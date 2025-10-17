import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the header title', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders correct paragraph text in App-body and App-footer', () => {
    render(<App />);
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    const footerText = screen.getByText(/copyright.*holberton school/i);
    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test('renders the holberton logo image', () => {
    render(<App />);
    const logoImg = screen.getByAltText(/holberton logo/i);
    expect(logoImg).toBeInTheDocument();
  });
});
