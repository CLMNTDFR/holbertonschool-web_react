# Task 0 & 1: Modernizing Header and Footer

## Description
This task involves converting the `Header` and `Footer` components from class-based components to functional components using React Hooks. Specifically, we replace the `contextType` or `Context.Consumer` pattern with the `useContext` hook.

## Tasks

### 0. Convert Header Component
- Transform `Header.jsx` into a functional component.
- Implement context consumption using the `useContext` hook.
- Ensure all existing functionalities (logout link, welcome message) are preserved.

### 1. Update Footer Component
- Update `Footer.jsx` to use the `useContext` hook for context consumption.
- Ensure the "Contact us" link is displayed only when the user is logged in.

## Files
- `dashboard/src/Header/Header.jsx`
- `dashboard/src/Header/Header.spec.js`
- `dashboard/src/Footer/Footer.jsx`
- `dashboard/src/Footer/Footer.spec.js`
