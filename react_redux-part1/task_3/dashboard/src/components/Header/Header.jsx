import { StyleSheet, css } from "aphrodite";
import logo from "../../assets/holberton-logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const styles = StyleSheet.create({
  header: {
    //display: "inline-flex",
    //alignItems: "center",
    //fontSize: "20px",
    //fontFamily: "sans-serif",
  },
  title: {
    //color: "#e1003c",
    //fontFamily: "'Roboto', sans-serif",
    //fontWeight: "bold",
    //fontSize: "2.5rem",
    //margin: 0,
  },
  logo: {
    //height: "30vmin",
    //pointerEvents: "none",
  },
  logoutSection: {
    //marginLeft: "auto",
    //fontSize: "1rem",
  },
});

/**
 * Header component for the School Dashboard application.
 * Displays the Holberton logo, title, and logout section if user is logged in.
 * Uses Redux for state management to check login status and dispatch logout action.
 * @returns {JSX.Element} The rendered Header component
 */
export default function Header() {
  // Get the dispatch function from Redux to dispatch actions
  const dispatch = useDispatch();
  // Select the login status from the Redux auth state
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // Select the user object from the Redux auth state
  const user = useSelector((state) => state.auth.user);

  /**
   * Handles the logout action when the logout link is clicked.
   * Prevents default link behavior and dispatches the logout action to Redux.
   * @param {Event} e - The click event
   */
  const handleLogout = (e) => {
    // Prevent the default link navigation behavior
    e.preventDefault();
    // Dispatch the logout action to update the Redux state
    dispatch(logout());
  };

  // Render the header JSX
  return (
    <div className={css(styles.header)}>
      {/* Display the Holberton logo image */}
      <img src={logo} className={css(styles.logo)} alt="holberton logo" />
      {/* Display the main title of the dashboard */}
      <h1 className={css(styles.title)}>School Dashboard</h1>
      {/* Conditionally render the logout section if user is logged in */}
      {isLoggedIn && (
        <div className={css(styles.logoutSection)} id="logoutSection">
          {/* Welcome message with user's email */}
          Welcome <strong>{user?.email}</strong>{" "}
          {/* Logout link that triggers handleLogout on click */}
          (<a href="#logout" onClick={handleLogout}>logout</a>)
        </div>
      )}
    </div>
  );
}
