# React Redux (PART 1)

## Description

This project introduces Redux for state management in a React application. It covers the basics of Redux, including slices, store, reducers, and hooks like useSelector and useDispatch.

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Why Redux is Awesome
- How to manage state through redux slices
- What Happens When You Dispatch an Action in Redux
- What is a Redux Store
- How to Access State using useSelector
- How to dispatch actions using useDispatch

## Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 10.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the project's folder and each task's folder, is mandatory
- Install Jest globally: npm install -g jest version 29.7.0

## Tasks

### 0. Update project structure

In this task you'll update your project structure, and to achieve that update your src to the one below:

```
src/
│
├── app/
│   ├── store.js
│   └── rootReducer.js
│
├── features/
│   ├── auth/
│   │   └── authSlice.js
│   ├── notifications/
│   │   └── notificationsSlice.js
│   └── courses/
│       └── coursesSlice.js
│
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.spec.js
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.spec.js
│   ├── BodySection/
│   │   ├── BodySection.jsx
│   │   └── BodySection.spec.js
│   ├── BodySectionWithMarginBottom/
│   │   ├── BodySectionWithMarginBottom.jsx
│   │   └── BodySectionWithMarginBottom.spec.js
│   ├── HOC/
│   │   ├── WithLogging.jsx
│   │   └── WithLogging.spec.js
│   ├── NotificationItem/
│   │   ├── NotificationItem.jsx
│   │   └── NotificationItem.spec.js
│   └── Notifications/
│        ├── Notifications.jsx
│        └── Notifications.spec.js
│
├── pages/
│   ├── CourseList/
│   │   ├── CourseList.jsx
│   │   ├── CourseList.spec.js
│   │   └── CourseListRow/
│   │       ├── CourseListRow.jsx
│   │       └── CourseListRow.spec.js
│   └── Login/
│        ├── Login.jsx
│        └── Login.spec.js
│
├── hooks/
│   └──  useLogin.jsx
│
├── utils/
│   ├── utils.js
│   └── utils.spec.js
│
├── assets/
│   ├── close-icon.png
│   └── holberton-logo.jpg
│
├── tests/
│   └── App.spec.js
│
├── App.jsx
├──appReducer.js
└── main.jsx
```

#### Package to install:

- @reduxjs/toolkit
- react-redux

#### Requirements:

- Your src folder must follow the above structure (and even empty the new files must be included in your project structure)
- Your React application works as expected
- All your unit tests PASS

#### Repo:

- GitHub repository: holbertonschool-web_react
- Directory: react_redux-part1
- File: task_0/dashboard/src