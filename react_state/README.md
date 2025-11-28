# React state

## Description
Resources
Read or watch:
* [State and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
* [SetState and State callback](https://reactjs.org/docs/react-component.html#setstate)
* [Passing Data Deeply with Context](https://reactjs.org/docs/context.html)
* [Context API on Class Component](https://reactjs.org/docs/context.html#class-contexttype)
* [Forms and Controlled components](https://reactjs.org/docs/forms.html)
* [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
* [React State hook](https://reactjs.org/docs/hooks-state.html)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* What the state of a component or a container is
* The lifecycle of a component
* How to modify a state and execute code in the right order
* What a controlled component is
* How to use Forms in React
* How to reuse smaller components, keep them pure, and lift its state to principal containers
* The use of a React Hook and how to create one
* How to pass data deeply using context

## Requirements
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 10.x.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* A README.md file, at the root of the project’s folder and each task’s folder, is mandatory
* Install Jest globally: npm install -g jest

## Tasks

### 0. Adding a local state for notifications
**mandatory**

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

**Repo:**
* GitHub repository: `holbertonschool-web_react`
* Directory: `react_state`
* File: `task_0/dashboard/src/App/App.jsx`, `task_0/dashboard/src/App/App.spec.js`, `task_0/dashboard/src/Notifications/Notifications.jsx`, `task_0/dashboard/src/Notifications/Notifications.spec.js`
