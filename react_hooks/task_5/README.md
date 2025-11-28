# Task 7: Custom React Hook

## Description
This task involves creating a custom React hook `useLogin` to manage the login form state and logic, improving code reusability and separation of concerns.

## Tasks

### 7. Custom React hook
- Create `src/hooks/useLogin.jsx`.
- Move form state management and validation logic to `useLogin`.
- Refactor `Login.jsx` to use the `useLogin` hook.
- Ensure validation rules (email format, password length >= 8) are enforced.
- Ensure the submit button is enabled only when the form is valid.

## Files
- `dashboard/src/hooks/useLogin.jsx`
- `dashboard/src/Login/Login.jsx`
- `dashboard/src/Login/Login.spec.js`
