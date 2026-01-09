// Import React (required for JSX)
import React from 'react';
// Import Aphrodite for CSS-in-JS styling
import { StyleSheet, css } from 'aphrodite';
// Import the base BodySection component
import BodySection from '../BodySection/BodySection';

/**
 * BodySectionWithMarginBottom component that wraps BodySection with bottom margin.
 * Adds consistent spacing below body sections in the dashboard layout.
 * @param {Object} props - Props to pass through to BodySection
 * @returns {JSX.Element} The rendered BodySectionWithMarginBottom component
 */
export default function BodySectionWithMarginBottom(props) {
  // Render wrapper div with margin styling and BodySection inside
  return (
    <div className={css(styles.bodySectionWithMargin)} data-testid="body-section-with-margin">
      {/* Pass all props through to the BodySection component */}
      <BodySection {...props} />
    </div>
  );
}

// Define styles using Aphrodite StyleSheet
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    // Add bottom margin for spacing between sections
    marginBottom: '40px',
  },
});