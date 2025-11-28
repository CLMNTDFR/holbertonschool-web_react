# Task 2: Convert Login Component

## Description
This task involves converting the `Login` component from a class-based component to a functional component using React Hooks. We replace `this.state` and `this.setState` with the `useState` hook.

## Tasks

### 2. Convert Login component
- Convert `Login.jsx` to a functional component.
- Initialize state using `useState`:
  - `enableSubmit`: boolean, default `false`.
  - `formData`: object `{ email: '', password: '' }`.
- Update `handleChangeEmail` and `handleChangePassword` to update `formData` and validate the form.
- Update `handleLoginSubmit` to call the `logIn` prop.

## Files
- `dashboard/src/Login/Login.jsx`
- `dashboard/src/Login/Login.spec.js`
