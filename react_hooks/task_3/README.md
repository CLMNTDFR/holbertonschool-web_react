# Task 4: Update the Notifications Component

## Description
This task involves converting the `Notifications` component from a class-based component to a functional component. We use `React.memo` with a custom comparison function to prevent unnecessary re-renders, mimicking the behavior of `shouldComponentUpdate` or `PureComponent`.

## Tasks

### 4. Update the Notifications component
- Convert `Notifications.jsx` to a functional component.
- Use `React.memo` for memoization.
- Implement a custom comparison function to only re-render if the notifications list length changes or the drawer display state changes.
- Ensure all existing functionalities work as expected.

## Files
- `dashboard/src/Notifications/Notifications.jsx`
- `dashboard/src/Notifications/Notifications.spec.js`
