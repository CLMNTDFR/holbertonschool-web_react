import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mockAxios from 'jest-mock-axios';
import Notifications from './Notifications';
import notificationsSlice, { fetchNotifications } from '../../features/notifications/notificationsSlice';


describe('Notifications', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        notifications: notificationsSlice,
      },
    });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('renders without crashing', async () => {
    const promise = store.dispatch(fetchNotifications());

    mockAxios.mockResponse({
      data: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', value: 'Placeholder' },
        ],
      },
    });

    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });

  test('toggles drawer visibility when clicking the title', async() => {
    const promise = store.dispatch(fetchNotifications());

    mockAxios.mockResponse({
      data: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', value: 'Placeholder' },
        ],
      },
    });

    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    const drawer = screen.getByTestId('notification-drawer');
    expect(drawer.className).not.toMatch(/visible_/);

    fireEvent.click(screen.getByText(/your notifications/i));
    expect(drawer.className).toMatch(/visible_/);

    fireEvent.click(screen.getByText(/your notifications/i));
    expect(drawer.className).not.toMatch(/visible_/);
  });

  test('close drawer on close button', async () => {
    const promise = store.dispatch(fetchNotifications());

    mockAxios.mockResponse({
      data: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', value: 'Placeholder' },
        ],
      },
    });

    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    const drawer = screen.getByTestId('notification-drawer');

    fireEvent.click(screen.getByText(/your notifications/i));
    expect(drawer.className).toMatch(/visible_/);

    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(drawer.className).not.toMatch(/visible_/);
  });

  test('marks notification as read', async () => {
    const promise = store.dispatch(fetchNotifications());

    mockAxios.mockResponse({
      data: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', value: 'Placeholder' },
        ],
      },
    });

    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    const firstNotification = screen.getByText('New course available');

    fireEvent.click(firstNotification);

    await waitFor(() => {
      const updatedNotifications = screen.getAllByRole('listitem');
      expect(updatedNotifications).toHaveLength(2);
    });
  });

  test('renders notification drawer container', async () => {
    const promise = store.dispatch(fetchNotifications());

    mockAxios.mockResponse({
      data: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', value: 'Placeholder' },
        ],
      },
    });

    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    expect(screen.getByTestId('notification-drawer')).toBeInTheDocument();
  });

  test('does not re-render when drawer visibility is toggled', async () => {
    const promise = store.dispatch(fetchNotifications());

    mockAxios.mockResponse({
      data: {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', value: 'Placeholder' },
        ],
      },
    });

    await promise;

    render(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );

    expect(screen.getByText('New course available')).toBeInTheDocument();

    // Drawer toggles should keep fetched data intact.
    fireEvent.click(screen.getByText(/your notifications/i));

    fireEvent.click(screen.getByText(/your notifications/i));
    expect(screen.getByText('New course available')).toBeInTheDocument();
  });
});
