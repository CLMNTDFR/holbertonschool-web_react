# Task 0 - Notifications Re-render Optimization

## Goal

Fix unnecessary re-renders in the Notifications feature by separating visibility behavior from Redux data updates.

## Problem Summary

The drawer visibility flag was previously handled in Redux alongside notifications data.
Every show or hide action dispatched a Redux state change and triggered render work that was not required for data updates.

## Implemented Changes

### Notifications slice

- Removed drawer visibility state from the notifications slice.
- Kept Redux focused on notifications data only.
- Preserved async fetch and mark-as-read behavior.

### Notifications component

- Replaced Redux-driven visibility with a DOM ref approach using useRef.
- Added a local toggle handler that applies or removes an Aphrodite visible class.
- Updated drawer style to start hidden:
	- opacity: 0
	- visibility: hidden
- Added visible style:
	- opacity: 1
	- visibility: visible

This ensures opening and closing the drawer does not trigger Redux updates.

### Tests

- Updated behavior checks to rely on UI state toggling rather than visibility actions in Redux.
- Preserved tests for rendering and mark-as-read flow.

## Files

- dashboard/src/components/Notifications/Notifications.jsx
- dashboard/src/components/Notifications/Notifications.spec.js
- dashboard/src/features/notifications/notificationsSlice.js

## Run

From task_0/dashboard:

```bash
npm install
npm test
npm run dev
```

## Validation Checklist

- Drawer show/hide does not rely on Redux visibility actions.
- Notifications data remains functional.
- Tests pass without console or lint issues.

## Learning Focus

Use local UI state or DOM refs for visual-only interactions when global state synchronization is unnecessary.