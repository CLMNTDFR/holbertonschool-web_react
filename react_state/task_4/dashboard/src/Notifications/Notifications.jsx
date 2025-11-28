import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

    const borderStyle = {
      borderColor: 'var(--main-color)',
    };

    const menuItemClass = `menuItem fixed top-2 right-2 p-2 cursor-pointer bg-white z-40 md:static md:text-right md:p-2.5 ${
      listNotifications.length > 0 && !displayDrawer ? 'animate-bounce' : ''
    }`;

    return (
      <>
        <div className={menuItemClass} onClick={handleDisplayDrawer}>
          <p className="m-0 font-bold">Your notifications</p>
        </div>
        {displayDrawer && (
          <div 
            className="Notifications fixed top-0 left-0 w-full h-full bg-white z-50 p-3 overflow-y-auto
                       md:absolute md:top-0 md:right-0 md:w-96 md:h-auto md:left-auto md:border-2 md:border-dashed md:p-1.5"
            style={borderStyle}
          >
            <button
              className="absolute right-2.5 top-2.5 bg-transparent border-none cursor-pointer text-2xl font-bold"
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              ×
            </button>
            {listNotifications.length === 0 ? (
              <p className="m-0 mt-8">No new notification for now</p>
            ) : (
              <>
                <p className="m-0 mb-2.5 mt-8 md:mt-0">Here is the list of notifications</p>
                <ul className="list-none p-0 m-0 mt-2.5 md:list-inside">
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={markNotificationAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  listNotifications: [],
  markNotificationAsRead: () => {},
};

export default Notifications;
