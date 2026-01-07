import React from 'react';
import NotificationItem from '../NotificationItem/NotificationItem';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
      </ul>
    </div>
  );
}

export default Notifications;