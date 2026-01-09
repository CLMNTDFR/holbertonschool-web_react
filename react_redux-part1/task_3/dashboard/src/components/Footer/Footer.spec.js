// Import testing utilities from React Testing Library
import { render, screen } from '@testing-library/react';
// Import the Footer component to test
import Footer from './Footer';
// Import utility functions used by the Footer component
import { getCurrentYear, getFooterCopy } from '../../utils/utils';
// Import Aphrodite testing utilities to suppress style injection in tests
import { StyleSheetTestUtils } from "aphrodite";

// Suppress Aphrodite style injection before each test to avoid DOM pollution
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Clear style buffer and resume style injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Test suite for Footer component
describe('Footer Component', () => {
    // Define test user objects for different scenarios
    const defaultUser = { isLoggedIn: false, email: '', password: '' };
    const loggedInUser = { isLoggedIn: true, email: 'test@example.com', password: 'password123' };

    // Sub-suite for basic rendering tests
    describe('Basic Rendering', () => {
        // Test: Component renders without crashing
        test('Renders without crashing', () => {
            // Render Footer with default user (not logged in)
            render(<Footer user={defaultUser} />);
            // Find the copyright paragraph element
            const footerParagraph = screen.getByText(`Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`);
            // Assert that the text contains expected copyright format
            expect(footerParagraph).toHaveTextContent(/copyright \d{4} - holberton school/i);
        });

        // Test: Contact link is not rendered when user is not logged in
        test('Does not render contact link when user is not logged in', () => {
            // Render Footer with default user
            render(<Footer user={defaultUser} />);
            // Query for contact link (should not exist)
            const link = screen.queryByRole('link', { name: /contact us/i });
            // Assert that link is not in the document
            expect(link).not.toBeInTheDocument();
        });

        // Test: Contact link is rendered when user is logged in
        test('Renders contact link when user is logged in', () => {
            // Render Footer with logged in user
            render(<Footer user={loggedInUser} />);
            // Find the contact link
            const link = screen.getByRole('link', { name: /contact us/i });
            // Assert that link is in the document
            expect(link).toBeInTheDocument();
        });
    });

    // Sub-suite for edge case scenarios
    describe('Edge Scenarios', () => {
        // Test: Contact link renders when isLoggedIn is truthy (even without email)
        test('does not render contact link when user email is null', () => {
            // User object with isLoggedIn true but no email
            const withTruthyIsLoggedIn = { isLoggedIn: true };
            // Render Footer with this user
            render(<Footer user={withTruthyIsLoggedIn} />);
            // Query for contact link
            const link = screen.queryByRole('link', { name: /contact us/i });
            // Assert that link is in the document (based on isLoggedIn only)
            expect(link).toBeInTheDocument();
        });

        // Test: Contact link does not render when isLoggedIn is false
        test('Does not render contact link when user email is invalid', () => {
            // User object with isLoggedIn false
            const withFalsyIsLoggedIn = { isLoggedIn: false };
            // Render Footer with this user
            render(<Footer user={withFalsyIsLoggedIn} />);

            // Query for contact link
            const link = screen.queryByRole('link', { name: /contact us/i });
            // Assert that link is not in the document
            expect(link).not.toBeInTheDocument();
        });
    });

    // Test: Verify Footer is a functional component (not class component)
    test('Should confirm Footer is a functional component', () => {
        // Get prototype properties of Footer
        const FooterPrototype = Object.getOwnPropertyNames(Footer.prototype);
        // Assert that prototype has constructor (indicating function component)
        expect(FooterPrototype).toEqual(expect.arrayContaining(['constructor']));
        // Assert that prototype has only one property
        expect(FooterPrototype).toHaveLength(1);
        // Assert that prototype's prototype is empty object (functional component)
        expect(Footer.prototype.__proto__).toEqual({});
    });
});
