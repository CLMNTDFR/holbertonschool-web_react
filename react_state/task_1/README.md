# Task 1. Controlled components and state callback

Create a form within the Login component & handle login submission in `task_1/dashboard/src/Login/Login.jsx`:

To solve this task, convert you should the functional Login component to a class component:
* Create a local state with the value `isLoggedIn` set to `false`
* Create a function named `handleLoginSubmit` that updates the local state by setting `isLoggedIn` to `true`
* Wrap the input fields within a form element
* Replace the button with an input element of type submit
* When the form is submitted, call the newly created login submission handling function

Create controlled component:
* Modify the local state to add two new values: `email` and `password`. By default, both should be empty strings.
* Set the email and the password input values to the local state
* Create two methods, `handleChangeEmail` and `handleChangePassword`:
    * Each method should handle changes to its respective input field (Email or Password):
    * When the user types into the email input, `handleChangeEmail` should be called
    * When the user types into the password input, `handleChangePassword` should be called
* Ensure the local component state updates in real time as the user types:
    * The email input field should update the email state
    * The password input field should update the password state accordingly.

Modify state callback:
* Modify the local state to add a new value `enableSubmit`, set to `false` by default.
* Modify the Submit button so that it is only enabled when the `enableSubmit` value is `true`
* Enable the Submit button whenever:
    * Both fields are not empty.
    * The email input contains a valid email address.
    * The password input contains at least 8 characters.

Add tests:
* Add a test to verify that the submit button is disabled by default.
* Add a test to verify that the button becomes enabled only after both the Email and Password inputs meet the required criteria.

**Requirements:**
* The state should have all the default values set in the constructor
* Submitting the form should not reload the page.
* The email input must be valid email address, and the password must have at least 8 characters.
* The submit input should be enabled when the above conditions are met
* There should not be any linting errors in the console when running the application.

**Tips:**
* Use a regular expression (Regex) to validate the email input.
* At this stage, clicking the enabled Submit input does not render the CourseList component. This functionality will be addressed in the next task.
