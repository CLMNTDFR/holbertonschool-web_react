import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Login component
 * Handles user login with email and password.
 * Uses useState to manage form data and submit button state.
 * @param {Object} props - Component props
 * @param {Function} props.logIn - Function to call on successful login
 */
function Login({ logIn }) {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  /**
   * Handles email input change
   * Updates formData and validates the form
   * @param {Event} event - Input change event
   */
  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      email,
    }));
    validateForm(email, formData.password);
  };

  /**
   * Handles password input change
   * Updates formData and validates the form
   * @param {Event} event - Input change event
   */
  const handleChangePassword = (event) => {
    const password = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      password,
    }));
    validateForm(formData.email, password);
  };

  /**
   * Validates the form inputs
   * Enables submit button if email is valid and password is at least 8 chars
   * @param {string} email - Email value
   * @param {string} password - Password value
   */
  const validateForm = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8;
    const isFormValid = isEmailValid && isPasswordValid && email !== '' && password !== '';
    
    setEnableSubmit(isFormValid);
  };

  /**
   * Handles form submission
   * Calls logIn prop with email and password
   * @param {Event} event - Form submit event
   */
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(formData.email, formData.password);
  };

  const borderStyle = {
    borderTopColor: 'var(--main-color)',
  };

  return (
    <div className="App-body" style={borderStyle}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit} data-testid="login-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChangeEmail}
            data-testid="email-input"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password}
            onChange={handleChangePassword}
            data-testid="password-input"
          />
        </div>
        <input 
          type="submit" 
          value="OK" 
          disabled={!enableSubmit}
          data-testid="submit-button"
        />
      </form>
    </div>
  );
}

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

export default Login;
