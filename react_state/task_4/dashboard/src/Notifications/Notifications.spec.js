import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Notifications from './Notifications';

describe('Notifications component', () => {
  const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('renders without crashing', () => {
    render(<Notifications />);
  });

  test('displays "Your notifications" text in all cases', () => {
    render(<Notifications />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  describe('when displayDrawer is false', () => {
    test('does not display the close button', () => {
      const { container } = render(<Notifications displayDrawer={false} notifications={notificationsList} />);
      const button = container.querySelector('button[aria-label="Close"]');
      expect(button).not.toBeInTheDocument();
    });

    test('does not display "Here is the list of notifications"', () => {
      render(<Notifications displayDrawer={false} notifications={notificationsList} />);
      expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
    });

    test('does not display notification items', () => {
      const { container } = render(<Notifications displayDrawer={false} notifications={notificationsList} />);
      const listItems = container.querySelectorAll('li');
      expect(listItems).toHaveLength(0);
    });
  });

  describe('when displayDrawer is true', () => {
    test('displays the close button', () => {
      const { container } = render(<Notifications displayDrawer={true} notifications={notificationsList} />);
      const button = container.querySelector('button[aria-label="Close"]');
      expect(button).toBeInTheDocument();
    });

    test('displays "Here is the list of notifications"', () => {
      render(<Notifications displayDrawer={true} notifications={notificationsList} />);
      expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    });

    test('displays notification items', () => {
      const { container } = render(<Notifications displayDrawer={true} notifications={notificationsList} />);
      const listItems = container.querySelectorAll('li');
      expect(listItems).toHaveLength(3);
    });
  });

  describe('when displayDrawer is true and notifications is empty', () => {
    test('displays "No new notification for now"', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      expect(screen.getByText('No new notification for now')).toBeInTheDocument();
    });

    test('does not display "Here is the list of notifications"', () => {
      render(<Notifications displayDrawer={true} notifications={[]} />);
      expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
    });
  });

  test('calls markNotificationAsRead when notification item is clicked', async () => {
    const markNotificationAsReadMock = jest.fn();
    const user = userEvent.setup();
    const { container } = render(
      <Notifications 
        displayDrawer={true} 
        notifications={notificationsList} 
        markNotificationAsRead={markNotificationAsReadMock}
      />
    );
    
    const firstNotification = container.querySelectorAll('li')[0];
    await user.click(firstNotification);
    
    expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
  });

  test('calls handleDisplayDrawer when menu item is clicked', async () => {
    const handleDisplayDrawer = jest.fn();
    const user = userEvent.setup();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    
    const menuItem = screen.getByText('Your notifications');
    await user.click(menuItem);
    
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  test('calls handleHideDrawer when close button is clicked', async () => {
    const handleHideDrawer = jest.fn();
    const user = userEvent.setup();
    render(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    
    const closeButton = screen.getByLabelText('Close');
    await user.click(closeButton);
    
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  test('does not re-render when updating with the same list', () => {
    const { rerender, container } = render(
      <Notifications displayDrawer={true} notifications={notificationsList} />
    );

    const initialListItems = container.querySelectorAll('li');
    expect(initialListItems).toHaveLength(3);

    // Re-render with the same notifications (same length)
    const sameNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];

    rerender(<Notifications displayDrawer={true} notifications={sameNotifications} />);

    const updatedListItems = container.querySelectorAll('li');
    expect(updatedListItems).toHaveLength(3);
  });

  test('re-renders when updating with a longer list', () => {
    const { rerender, container } = render(
      <Notifications displayDrawer={true} notifications={notificationsList} />
    );

    const initialListItems = container.querySelectorAll('li');
    expect(initialListItems).toHaveLength(3);

    // Re-render with a longer list
    const longerNotifications = [
      ...notificationsList,
      { id: 4, type: 'default', value: 'New notification' },
    ];

    rerender(<Notifications displayDrawer={true} notifications={longerNotifications} />);

    const updatedListItems = container.querySelectorAll('li');
    expect(updatedListItems).toHaveLength(4);
  });
});
