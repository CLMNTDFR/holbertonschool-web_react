// Import React for JSX and component creation
import React from 'react';
// Import testing utilities from React Testing Library
import { render, screen, cleanup } from '@testing-library/react';
// Import the WithLogging HOC to test
import WithLogging from './WithLogging';

// Clean up after each test to prevent test interference
afterEach(cleanup)

// Mock component to test the HOC with
class MockApp extends React.Component {
    // Render method for the mock component
    render() {
        return (
            <h1>
                Hello from Mock App Component
            </h1>
        )
    }
}

// Apply the WithLogging HOC to the mock component
const MockWithHOC = WithLogging(MockApp)

// Test: Verify that the wrapped component renders correctly
test('Can render the heading "Hello from Mock App Component"', () => {
    // Render the component wrapped with HOC
    render(<MockWithHOC />)
    // Assert that the heading text is present in the document
    expect(screen.getByRole('heading', { name: /hello from mock app component/i })).toBeInTheDocument();
});
