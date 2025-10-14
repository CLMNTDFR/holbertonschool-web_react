import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText(/password/i);
    expect(inputs.length).toBe(1); // Only email uses 'textbox' role
    expect(passwordInput).toBeInTheDocument(); // password is type="password"
  });

  test('renders 2 label elements with the text Email and Password', () => {
    render(<App />);
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('renders a button with text OK', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});
