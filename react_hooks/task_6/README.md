# Task 8: State Symphony

## Description
This task involves refactoring the application to use `useReducer` for state management instead of `useState` and Context API. This provides a more scalable and centralized way to manage state.

## Tasks

### 8. State Symphony
- Create `src/App/appReducer.js` with actions, initial state, and reducer function.
- Update `App.jsx` to use `useReducer` with `appReducer`.
- Dispatch actions for login, logout, drawer toggle, and data fetching.
- Remove Context Provider and pass state/dispatch as props to children.
- Update `Header` and `Footer` to receive props instead of using context.
- Ensure all functionalities work as expected.

## Files
- `dashboard/src/App/appReducer.js`
- `dashboard/src/App/App.jsx`
- `dashboard/src/Header/Header.jsx`
- `dashboard/src/Footer/Footer.jsx`
- `dashboard/src/App/App.spec.js`
