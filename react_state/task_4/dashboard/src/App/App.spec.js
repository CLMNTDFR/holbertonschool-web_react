import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  let alertSpy;

  beforeEach(() => {
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  test('renders without crashing', () => {
    render(<App />);
  });

  test('displays alert when ctrl+h is pressed', () => {
    render(<App />);

    const event = new KeyboardEvent('keydown', {
      ctrlKey: true,
      key: 'h',
      bubbles: true,
    });

    act(() => {
      window.dispatchEvent(event);
    });

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
  });

  test('displays News from the School title and paragraph by default', () => {
    render(<App />);
    
    const newsTitle = screen.getByText(/news from the school/i);
    expect(newsTitle).toBeInTheDocument();
    
    const newsParagraph = screen.getByText(/ipsum lorem ipsum/i);
    expect(newsParagraph).toBeInTheDocument();
  });

  test('displays Login component by default', () => {
    render(<App />);
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
    expect(screen.queryByText(/course list/i)).not.toBeInTheDocument();
  });

  test('displays CourseList component after logging in', async () => {
    const user = userEvent.setup();
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: 'OK' });

    await user.type(emailInput, 'test@test.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    expect(screen.getByText(/course list/i)).toBeInTheDocument();
    expect(screen.queryByText(/log in to continue/i)).not.toBeInTheDocument();
  });

  test('displays Login component after logging out via Ctrl+H', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Log in first
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: 'OK' });

    await user.type(emailInput, 'test@test.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    // Verify logged in
    expect(screen.getByText(/course list/i)).toBeInTheDocument();

    // Log out via Ctrl+H
    const event = new KeyboardEvent('keydown', {
      ctrlKey: true,
      key: 'h',
      bubbles: true,
    });
    
    act(() => {
      window.dispatchEvent(event);
    });

    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
  });

  test('displays Login component after logging out via Header link', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Log in first
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: 'OK' });

    await user.type(emailInput, 'test@test.com');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    // Verify logged in
    expect(screen.getByText(/course list/i)).toBeInTheDocument();

    // Log out via Header link
    const logoutLink = screen.getByText(/logout/i);
    await user.click(logoutLink);

    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
  });

  test('markNotificationAsRead removes the notification from the list', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Open notifications drawer
    const menuItem = screen.getByText('Your notifications');
    await user.click(menuItem);
    
    // Check initial notifications count
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    
    // Click on the first notification
    const firstNotification = listItems[0];
    await user.click(firstNotification);
    
    // Check notifications count after removal
    const updatedListItems = screen.getAllByRole('listitem');
    expect(updatedListItems).toHaveLength(2);
  });
});
