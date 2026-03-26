# Task 3 - Memoized Notification Filters

## Goal

Add notification filtering by type (urgent/default/all) and optimize filtering cost with memoized selectors.

## Context

This final task combines previous improvements:

- stable rendering behavior,
- loading state handling,
- and now efficient derived data computation.

## Implemented Changes

### Notifications thunk transformation

- Updated fetchNotifications to normalize API response.
- Keeps only unread items where context.isRead is false.
- Maps each item to:
	- id
	- type
	- isRead
	- value

### Memoized selector

- Added features/selectors/notificationSelector.js.
- Implemented getFilteredNotifications with createSelector.
- Selector inputs:
	- notifications array from Redux state
	- active filter argument
- Filter behavior:
	- all: returns all unread notifications
	- urgent/default: returns matching type only

### Notifications component

- Added currentFilter state initialized to all.
- Uses getFilteredNotifications(state, currentFilter) instead of direct array access.
- Added filter toggle handlers:
	- urgent button (‼️)
	- default button (??)
- Render logic now works against filteredNotifications.

### NotificationItem component

- Removed html prop handling.
- Uses explicit props: id, type, value, markAsRead.
- Keeps data-notification-type for tests.
- Click marks notification as read.

### Tests

- Updated test coverage for filtering behavior.
- Preserved existing rendering, loading, and mark-as-read checks.

## Files

- dashboard/src/features/notifications/notificationsSlice.js
- dashboard/src/features/selectors/notificationSelector.js
- dashboard/src/components/Notifications/Notifications.jsx
- dashboard/src/components/Notifications/Notifications.spec.js
- dashboard/src/components/NotificationItem/NotificationItem.jsx

## Run

From task_3/dashboard:

```bash
npm install
npm test
npm run dev
```

## Validation Checklist

- Urgent and default filters toggle correctly.
- all filter state restores full unread list.
- Selector-driven filtering works without breaking existing behavior.
- Tests pass and lint remains clean.

## Learning Focus

Memoized selectors keep derived state logic efficient and reusable while reducing unnecessary recomputation.