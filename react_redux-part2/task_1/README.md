# Task 1 - Notifications Loading State

## Goal

Improve user experience by displaying a loading state while notifications are fetched.

## Context

Task 0 optimized render behavior by removing Redux visibility toggles.
Task 1 extends that work by making async fetch feedback explicit to users.

## Implemented Changes

### Notifications slice

- Added loading to initial state with default false.
- Updated thunk lifecycle handling:
	- pending: loading = true
	- fulfilled: loading = false and notifications updated
	- rejected: loading = false

### Notifications component

- Reads loading from Redux.
- Displays Loading... while request is in progress.
- Renders notification list only when loading is false.

This avoids blank UI moments and communicates data fetch status clearly.

### Tests

- Covered loading path behavior.
- Kept existing rendering and interaction tests valid with the new state flow.

## Files

- dashboard/src/components/Notifications/Notifications.jsx
- dashboard/src/components/Notifications/Notifications.spec.js
- dashboard/src/features/notifications/notificationsSlice.js

## Run

From task_1/dashboard:

```bash
npm install
npm test
npm run dev
```

## Validation Checklist

- Loading indicator appears during fetch.
- Indicator disappears on fulfilled or rejected request.
- Notifications list renders correctly after loading.
- No console warnings, lint errors, or failing tests.

## Learning Focus

A complete async UI requires both data and request-state management.