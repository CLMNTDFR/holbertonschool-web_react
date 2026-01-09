// Import Aphrodite for CSS-in-JS styling
import { StyleSheet, css } from 'aphrodite';
// Import utility functions for getting current year and footer copy text
import { getCurrentYear, getFooterCopy } from '../../utils/utils';

/**
 * Footer component for the School Dashboard application.
 * Displays copyright information and conditionally shows a contact link if user is logged in.
 * @param {Object} props - Component props
 * @param {Object} props.user - User object containing login status
 * @param {boolean} props.user.isLoggedIn - Whether the user is logged in
 * @returns {JSX.Element} The rendered Footer component
 */
export default function Footer({ user }) {
  // Render the footer JSX
  return (
    <div className={css(styles.footer)}>
      {/* Display copyright text with current year and footer copy */}
      <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
      {/* Conditionally render contact link if user is logged in */}
      {user.isLoggedIn && <a href="#">Contact us</a>}
    </div>
  );
}

// Define styles using Aphrodite StyleSheet
const styles = StyleSheet.create({
  footer: {
    // Flexbox layout for centering content
    display: 'flex',
    // Center items vertically
    alignItems: 'center',
    // Center items horizontally
    justifyContent: 'center',
    // Italic font style
    fontStyle: 'italic',
    // Sans-serif font family
    fontFamily: 'sans-serif',
  },
});