import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import AppContext from '../Context/context';

describe('Header component', () => {
  test('renders without crashing', () => {
    render(<Header />);
  });

  test('renders img and h1 tags', () => {
    render(<Header />);
    
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
    
    const heading = screen.getByText(/School dashboard/i);
    expect(heading).toBeInTheDocument();
  });

  test('logoutSection is not rendered with default context', () => {
    render(<Header />);
    const logoutSection = screen.queryByText(/welcome/i);
    expect(logoutSection).not.toBeInTheDocument();
  });

  test('logoutSection is rendered when user is logged in', () => {
    const contextValue = {
      user: {
        email: 'test@test.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    render(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    const logoutSection = screen.getByText(/welcome test@test.com/i);
    expect(logoutSection).toBeInTheDocument();
  });

  test('logOut function is called when clicking on logout link', () => {
    const logOutSpy = jest.fn();
    const contextValue = {
      user: {
        email: 'test@test.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: logOutSpy,
    };

    render(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    const logoutLink = screen.getByText(/logout/i);
    fireEvent.click(logoutLink);

    expect(logOutSpy).toHaveBeenCalled();
  });
});
