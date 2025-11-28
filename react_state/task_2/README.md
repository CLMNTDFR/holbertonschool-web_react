# Task 2. Context

Create a simple React Context in `task_2/dashboard/src/Context/context.js`:

Define a default user object with the following properties:
* `email`: set to an empty string
* `password`: set to an empty string
* `isLoggedIn`: set to `false`
Define a default `logOut` function as an empty function

Create and export (with export default only) a newContext variable that initializes a new React context. This context should include the user object and the logOut function as its default values.

Create the local state for the App in `App.jsx`:

Update the local state of the App component by:
* Adding a user object that mirrors the context’s user object
* Adding a logout property that references the logOut function from the context
* Create a `logIn` method that takes email and password as parameters. When the method is called:
    * Update the user object in the local state
    * Set the email and password to the values entered.
    * Set the `isLoggedIn` value to `true`
* Create a `logOut` method that resets the value of the user object in the local state

Remove the `isLoggedIn` and `logOut` props from the App. These will now be accessed through the state.

In the `render()` method, refactor the code to use the state to display either the CourseList or the Login components.

Pass the new `logIn` method,along with the user’s email and password, to the Login component as props.

in `Login.jsx`:

Update the local state:
* Remove the `isLoggedIn` property, as it is no longer used.
* Retrieve email and password from the props object (ensure they have default values).
* Modify the `handleLoginSubmit` to call the newly created `logIn` method from the props.

**Checkpoint**

Test your application. At this point, you should be able to log in to your React app:

By entering a valid email and a password with 8 or more characters:
* The submit button should become clickable. -The CourseList component should render.
* The Login component should unmount.
* Verify that the Notifications panel continues to work correctly. You should be able to show/hide the panel by clicking the top-right text and the close button.

Setting the context in `App.jsx`:

In the App component, wrap the entire app with the context provider element created earlier.
Set the value of the provider to the context’s user object and logOut function using the local state.

Add tests on the `Login.spec.js`:

Verify that the `logIn` method prop is correctly called with the user’s email and password when the login form is submitted

**Tip:**
As we’re carrying forward tests from task1, note that the App component’s architecture changed in task2. It no longer accepts `isLoggedIn` as a prop - it uses Context-based state instead. You may need to adjust related tests accordingly

**Requirements:**
* Be aware that React Context uses reference identity to determine when to re-render. Avoid directly creating objects within the provider’s value prop.
* The submit button should only be enabled if the email is valid and the password is at least 8 characters long.
