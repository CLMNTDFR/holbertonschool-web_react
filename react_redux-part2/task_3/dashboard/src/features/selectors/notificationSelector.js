import { createSelector } from 'reselect';

const selectNotifications = (state) => state.notifications.notifications;

export const getFilteredNotifications = createSelector(
  // The second input receives the runtime filter argument.
  [selectNotifications, (_, filter) => filter],
  (notifications, filter) => {
    // all bypasses type filtering and returns the full unread list.
    return notifications.filter(notification => 
      filter === 'all' || notification.type === filter
    );
  }
);
