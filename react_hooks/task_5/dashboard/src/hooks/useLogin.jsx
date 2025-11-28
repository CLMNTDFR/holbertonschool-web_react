import { useState, useCallback } from 'react';

/**
 * Custom hook for login form management
 * @param {Function} onLogin - Callback function to execute on successful login
 * @returns {Object} - Form state and handlers
 */
function useLogin(onLogin) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [enableSubmit, setEnableSubmit] = useState(false);

  /**
   * Validates the form inputs
   * @param {string} email - Email value
   * @param {string} password - Password value
   */
  const validateForm = useCallback((email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8;
    const isFormValid = isEmailValid && isPasswordValid && email !== '' && password !== '';
    
    setEnableSubmit(isFormValid);
  }, []);

  /**
   * Handles email input change
   * @param {Event} event - Input change event
   */
  const handleChangeEmail = useCallback((event) => {
    const email = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      email,
    }));
    validateForm(email, formData.password);
  }, [formData.password, validateForm]);

  /**
   * Handles password input change
   * @param {Event} event - Input change event
   */
  const handleChangePassword = useCallback((event) => {
    const password = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      password,
    }));
    validateForm(formData.email, password);
  }, [formData.email, validateForm]);

  /**
   * Handles form submission
   * @param {Event} event - Form submit event
   */
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (onLogin) {
      onLogin(formData.email, formData.password);
    }
  }, [formData.email, formData.password, onLogin]);

  return {
    email: formData.email,
    password: formData.password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  };
}

export default useLogin;
