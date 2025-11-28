# Task 5 & 6: Modernizing the Parent and Side Effects

## Description
This task involves converting the `App` component to a functional component and implementing data fetching using `useEffect` and `axios`.

## Tasks

### 5. Modernizing the Parent
- Convert `App.jsx` to a functional component.
- Use `useState` for state management (`displayDrawer`, `user`, `notifications`, `courses`).
- Remove lifecycle methods and use hooks instead.
- Implement `logIn`, `logOut`, `markNotificationAsRead` using `useCallback`.
- Use `useMemo` for context value.

### 6. Side Effect
- Fetch notifications and courses data dynamically using `axios`.
- Fetch notifications on component mount.
- Fetch courses when the user logs in.
- Handle errors during data fetching.

## Files
- `dashboard/src/App/App.jsx`
- `dashboard/src/App/App.spec.js`
- `public/notifications.json`
- `public/courses.json`
