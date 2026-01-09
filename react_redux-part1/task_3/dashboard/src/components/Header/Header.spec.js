// Import testing utilities from React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Header component to test
import Header from './Header';
// Import Redux Provider to wrap components in tests
import { Provider } from 'react-redux';
// Import configureStore to create a test store
import { configureStore } from '@reduxjs/toolkit';
// Import auth reducer and actions for testing authentication logic
import authReducer, { login, logout } from '../../features/auth/authSlice';

/**
 * Helper function to render components with Redux store.
 * Creates a Redux store with the auth reducer and wraps the component in a Provider.
 * Allows preloading initial state for testing different scenarios.
 * @param {JSX.Element} ui - The component to render
 * @param {Object} options - Options object
 * @param {Object} options.preloadedState - Initial state for the store
 * @param {Object} options.store - Custom store (defaults to configured store)
 * @returns {RenderResult} The result of rendering with Redux
 */
const renderWithRedux = (ui, { preloadedState, store = configureStore({ reducer: { auth: authReducer }, preloadedState }) } = {}) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

// Test suite for Header component with Redux integration
describe('Header with Redux', () => {
  // Test case: Verify logout section is not shown when user is not logged in
  test('should not render logout section when not logged in', () => {
    // Render Header with initial state where user is not logged in
    renderWithRedux(<Header />, {
      preloadedState: {
        auth: { user: null, isLoggedIn: false },
      },
    });

    // Assert that the "Welcome" text does not appear in the document
    expect(screen.queryByText(/Welcome/)).toBeNull();
  });

  // Test case: Verify logout section appears with user email when logged in
  test('should render logout section with email when logged in', () => {
    // Render Header with initial state where user is logged in
    renderWithRedux(<Header />, {
      preloadedState: {
        auth: { user: { email: 'user@example.com' }, isLoggedIn: true },
      },
    });

    // Assert that welcome message is displayed
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    // Assert that user's email is displayed
    expect(screen.getByText(/user@example.com/i)).toBeInTheDocument();
    // Assert that logout link is present
    expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument();
  });

  // Test case: Verify logout action is dispatched when logout link is clicked
  test('should dispatch logout action when logout link is clicked', () => {
    // Create a store with user logged in for testing
    const store = configureStore({
      reducer: { auth: authReducer },
      preloadedState: {
        auth: { user: { email: 'user@example.com' }, isLoggedIn: true },
      },
    });

    // Render Header with the test store
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // Find the logout link element
    const logoutLink = screen.getByRole('link', { name: /logout/i });
    // Simulate clicking the logout link
    fireEvent.click(logoutLink);

    // Get the state after the action
    const state = store.getState();
    // Assert that the user is now logged out
    expect(state.auth.isLoggedIn).toBe(false);
  });
});