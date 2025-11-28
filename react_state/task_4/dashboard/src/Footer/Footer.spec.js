import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import AppContext from '../Context/context';

describe('Footer component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
  });

  test('renders the text "Copyright"', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    const footerText = screen.getByText(new RegExp(`Copyright ${currentYear} - Holberton School`, 'i'));
    expect(footerText).toBeInTheDocument();
  });

  test('Contact us link is not displayed when user is logged out', () => {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    const contactLink = screen.queryByText(/contact us/i);
    expect(contactLink).not.toBeInTheDocument();
  });

  test('Contact us link is displayed when user is logged in', () => {
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
        <Footer />
      </AppContext.Provider>
    );

    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
  });
});
