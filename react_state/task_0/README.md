# Task 0. Adding a local state for notifications

Using the previous project (React inline styling), we have modularized our React application without worrying about interactions and state, which is usually a recommended approach to development. Now, our application is in a good position to start adding logic and state.

Modify the App component in `task_0/dashboard/src/App/App.jsx`:
* Create a local state to store a `displayDrawer` element:
    * Define the default value for the state in the constructor of the Class
    * Create a function named `handleDisplayDrawer` that will set the value of `displayDrawer` to `true`
    * Create a function named `handleHideDrawer` that will set the value of `displayDrawer` to `false`

Modify the Notifications import in `App.jsx`:
* Pass the `displayDrawer` prop to the component using the local state
* Pass the new functions `handleDisplayDrawer` and `handleHideDrawer` as props.

Modify the Notifications component in `Notifications.jsx`:
* When clicking on Your notifications, call `handleDisplayDrawer`
* When clicking on the close button, call `handleHideDrawer`
* At this point, after reloading the React application you should be able to show or hide the notifications panel

Modify the Notifications test suite in `Notifications.spec.js`:
* Add a test to verify that clicking on the menu item calls `handleDisplayDrawer`
* Add a test to verify that clicking on the close button calls `handleHideDrawer`

**Tips:**
* Remember that you implemented `shouldComponentUpdate`. You will need to modify its logic to allow the component to re-render when the `displayDrawer` prop changes
* Remember to use spies to verify whether a function is being called. You can pass a spy as a property

**Requirements:**
* When running the application, there should not be any errors in the console
