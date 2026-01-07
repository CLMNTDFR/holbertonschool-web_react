import React from 'react';

function NotificationItem({ type, value, html, markAsRead, id }) {
  const color = type === 'default' ? 'blue' : 'red';
  if (html) {
    return (
      <li
        style={{ color }}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      />
    );
  }
  return (
    <li style={{ color }} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>
  );
}

export default React.memo(NotificationItem);
