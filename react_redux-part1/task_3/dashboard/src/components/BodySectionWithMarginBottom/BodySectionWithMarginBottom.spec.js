// Import React for JSX
import React from 'react';
// Import testing utilities from React Testing Library
import { render, screen } from '@testing-library/react';
// Import the component to test
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
// Import Aphrodite testing utilities
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress Aphrodite style injection before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Clear style buffer after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Mock the BodySection component to control its behavior in tests
const mockBodySection = jest.fn();
jest.mock('../BodySection/BodySection', () => {
  // Create a mock component that calls the mock function and renders basic JSX
  const MockBodySection = (props) => {
    // Call the mock function with props for verification
    mockBodySection(props);
    return (
      <div>
        <h2>{props.title}</h2>
        {props.children}
      </div>
    );
  };
  // Set display name for debugging
  MockBodySection.displayName = 'MockBodySection';
  return MockBodySection;
});

// Test suite for BodySectionWithMarginBottom component
describe('BodySectionWithMarginBottom', () => {
  // Test: Verify component renders BodySection with correct props and content
  test('Should render BodySection inside a wrapper div with expected content', () => {
    // Render component with title and children
    render(
      <BodySectionWithMarginBottom title="Hello!">
        <p>This is child content</p>
        <span>Hey there!</span>
      </BodySectionWithMarginBottom>
    );

    // Find the wrapper div by test id
    const wrapper = screen.getByTestId('body-section-with-margin');
    // Assert wrapper exists
    expect(wrapper).toBeInTheDocument();

    // Verify mock BodySection was called with correct props
    expect(mockBodySection).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Hello!',
        children: expect.anything(),
      })
    );

    // Assert that all content is rendered
    expect(wrapper).toHaveTextContent('Hello!');
    expect(wrapper).toHaveTextContent('This is child content');
    expect(wrapper).toHaveTextContent('Hey there!');

    // Verify specific child elements are present
    const pElement = screen.getByText('This is child content');
    const spanElement = screen.getByText('Hey there!');
    expect(pElement).toBeInTheDocument();
    expect(spanElement).toBeInTheDocument();
  });

  // Test: Verify the wrapper div has the expected CSS class
  test('Should apply a class name that includes "bodySectionWithMargin"', () => {
    // Render component with minimal content
    render(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Child Content</p>
      </BodySectionWithMarginBottom>
    );

    // Find wrapper by test id
    const wrapper = screen.getByTestId('body-section-with-margin');
    // Assert wrapper exists
    expect(wrapper).toBeInTheDocument();

    // Assert that className contains the expected Aphrodite-generated class
    expect(wrapper.className).toMatch(/bodySectionWithMargin/);
  });
});
