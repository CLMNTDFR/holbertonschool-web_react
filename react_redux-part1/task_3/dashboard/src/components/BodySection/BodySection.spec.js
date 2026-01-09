// Import testing utilities from React Testing Library
import { render, screen } from '@testing-library/react';
// Import the BodySection component to test
import BodySection from './BodySection';

// Test: Verify BodySection renders title and multiple children correctly
test('Should pass any number of children without knows then beforehand', () => {
    // Render BodySection with title and multiple child elements
    render(
        <BodySection title="Test Title">
            <p>Child 1</p>
            <p>Child 2</p>
            <p>Child 3</p>
        </BodySection>
    );

    // Find the title heading element
    const titleElement = screen.getByRole('heading', { name: /test title/i });
    // Assert that the title is in the document
    expect(titleElement).toBeInTheDocument();
    // Assert that each child element is rendered
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByText('Child 3')).toBeInTheDocument();
});
