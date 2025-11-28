import { memo } from 'react';
import PropTypes from 'prop-types';

/**
 * NotificationItem component
 * Displays a single notification item.
 * Uses React.memo for performance optimization.
 * @param {Object} props - Component props
 * @param {string} props.type - Notification type (default or urgent)
 * @param {Object} props.html - HTML content for the notification
 * @param {string} props.value - Text content for the notification
 * @param {Function} props.markAsRead - Function to mark notification as read
 * @param {number} props.id - Notification ID
 */
function NotificationItem({ type, html, value, markAsRead, id }) {
  const textColorStyle = {
    color: type === 'urgent' ? 'var(--urgent-notification-item)' : 'var(--default-notification-item)',
  };
  
  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        style={textColorStyle}
        onClick={() => markAsRead(id)}
      />
    );
  }
  
  return (
    <li 
      data-notification-type={type} 
      style={textColorStyle}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
  markAsRead: () => {},
  id: 0,
};

export default memo(NotificationItem);
