import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  test('renders without crashing', () => {
    render(<Login />);
  });

  test('renders 2 input tags and 2 label tags', () => {
    render(<Login />);
    
    const labels = screen.getAllByRole('textbox').length + screen.getAllByLabelText(/password/i).length;
    const inputs = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button');
    
    expect(inputs).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('verify that the inputs get focus when labels are clicked', async () => {
    const user = userEvent.setup();
    render(<Login />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    
    await user.click(screen.getByText(/email:/i));
    expect(emailInput).toHaveFocus();
    
    await user.click(screen.getByText(/password:/i));
    expect(passwordInput).toHaveFocus();
  });

  test('submit button is disabled by default', () => {
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: 'OK' });
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled after changing the value of the two inputs', async () => {
    const user = userEvent.setup();
    render(<Login />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: 'OK' });
    
    await user.type(emailInput, 'test@test.com');
    await user.type(passwordInput, 'password123');
    
    expect(submitButton).toBeEnabled();
  });
});
