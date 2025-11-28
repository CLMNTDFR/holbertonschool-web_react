import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    
    const textColorStyle = {
      color: type === 'urgent' ? 'var(--urgent-notification-item)' : 'var(--default-notification-item)',
    };
    
    if (html) {
      return (
        <li
          className="border-b border-black p-2.5 text-[20px] w-full"
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          style={textColorStyle}
          onClick={() => markAsRead(id)}
        />
      );
    }
    
    return (
      <li 
        className="border-b border-black p-2.5 text-[20px] w-full"
        data-notification-type={type} 
        style={textColorStyle}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
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

export default NotificationItem;
