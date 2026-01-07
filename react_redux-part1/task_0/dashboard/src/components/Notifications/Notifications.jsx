import React from 'react';
import './Notifications.css';
import NotificationItem from '../NotificationItem/NotificationItem';

function Notifications({ displayDrawer, handleDisplayDrawer, handleHideDrawer, notifications = [], markNotificationAsRead }) {
  if (!Array.isArray(notifications)) {
    notifications = [];
  }
  return (
    <>
      <div onClick={handleDisplayDrawer}>Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <button onClick={handleHideDrawer} aria-label="Close">Close</button>
          <ul>
            {notifications.map(notification => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={() => markNotificationAsRead(notification.id)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default React.memo(Notifications);
