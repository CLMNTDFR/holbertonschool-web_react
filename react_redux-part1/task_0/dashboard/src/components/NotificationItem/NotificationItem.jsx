import React from 'react';

function NotificationItem({ type, value }) {
  return (
    <li data-notification-type={type}>
      {value}
    </li>
  );
}

export default NotificationItem;