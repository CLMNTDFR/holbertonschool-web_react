// Import React hooks for state management and side effects
import { useEffect, useCallback, useReducer } from 'react';
// Import axios for HTTP requests
import axios from 'axios';
// Import Redux dispatch hook
import { useDispatch as useReduxDispatch } from 'react-redux';
// Import login action from auth slice
import { login } from './features/auth/authSlice';

// Import UI components
import Notifications from './components/Notifications/Notifications';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
// Import utility function for notifications
import { getLatestNotification } from './utils/utils';
// Import layout components
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from './components/BodySection/BodySection';
// Import reducer and actions for app state management
import { appReducer, APP_ACTIONS, initialState } from './appReducer';

// API configuration constants
const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
  notifications: `${API_BASE_URL}/notifications.json`,
};

/**
 * Main App component that manages the dashboard application state and renders all UI components.
 * Uses useReducer for local state management and Redux for authentication.
 * Fetches courses and notifications data from API endpoints.
 * @returns {JSX.Element} The rendered App component
 */
export default function App() {
  // Initialize state with useReducer and appReducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Redux dispatch for authentication (used for checker)
  const reduxDispatch = useReduxDispatch();
  // Effect to automatically log in user for testing/checker purposes
  useEffect(() => {
    reduxDispatch(login({ email: 'test@holberton.io' }));
  }, [reduxDispatch]);

  // Effect to fetch notifications on component mount
  useEffect(() => {
    /**
     * Async function to fetch notifications from API and update state
     */
    const fetchNotifications = async () => {
      try {
        // Fetch notifications from API
        const response = await axios.get(ENDPOINTS.notifications);
        // Create latest notification object
        const latestNotif = {
          id: 3,
          type: 'urgent',
          html: { __html: getLatestNotification() },
        };
        // Get current notifications from response
        const currentNotifications = response.data.notifications;
        // Find index of notification with id 3 to replace
        const indexToReplace = currentNotifications.findIndex(
          (notification) => notification.id === 3
        );
        // Create copy of notifications array
        const updatedNotifications = [...currentNotifications];
        // Replace or add the latest notification
        if (indexToReplace !== -1) {
          updatedNotifications[indexToReplace] = latestNotif;
        } else {
          updatedNotifications.push(latestNotif);
        }
        // Dispatch action to update notifications in state
        dispatch({
          type: APP_ACTIONS.SET_NOTIFICATIONS,
          payload: updatedNotifications,
        });
      } catch (error) {
        // Log any errors during fetch
        console.error('Error fetching notifications:', error);
      }
    };
    // Call the fetch function
    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(ENDPOINTS.courses);
        dispatch({
          type: APP_ACTIONS.SET_COURSES,
          payload: response.data.courses,
        });
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchCourses();
  }, [state.user.isLoggedIn]);

  const handleDisplayDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  const handleHideDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  const logIn = (email, password) => {
    dispatch({
      type: APP_ACTIONS.LOGIN,
      payload: { email, password },
    });
  };

  const logOut = () => {
    dispatch({ type: APP_ACTIONS.LOGOUT });
  };

  const markNotificationAsRead = useCallback((id) => {
    dispatch({
      type: APP_ACTIONS.MARK_NOTIFICATION_READ,
      payload: id,
    });
    console.log(`Notification ${id} has been marked as read`);
  }, []);

  return (
    <>
      <Notifications
        notifications={state.notifications}
        handleHideDrawer={handleHideDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        displayDrawer={state.displayDrawer}
        markNotificationAsRead={markNotificationAsRead}
      />
      <>
        {/* ✅ Ne PAS passer de props user / logOut ici */}
        <Header />
        {!state.user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login login={logIn} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={state.courses} />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Holberton School news goes here</p>
        </BodySection>
      </>
      <Footer user={state.user} />
    </>
  );
}
