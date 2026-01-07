import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BodySection from './components/BodySection/BodySection';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import Notifications from './components/Notifications/Notifications';
import { login, logout } from './features/auth/authSlice';
import { toggleDrawer, setNotifications, markAsRead } from './features/notifications/notificationsSlice';

const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
    notifications: `${API_BASE_URL}/notifications.json`,
    courses: `${API_BASE_URL}/courses.json`,
};

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.user.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const displayDrawer = useSelector((state) => state.notifications?.displayDrawer ?? true);
  const notifications = useSelector((state) => state.notifications?.notifications || []);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(ENDPOINTS.notifications);
        dispatch(setNotifications(response.data.notifications || []));
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    const fetchCourses = async () => {
      try {
        const response = await axios.get(ENDPOINTS.courses);
        setCourses(response.data.courses || []);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchNotifications();
    if (isLoggedIn) {
      fetchCourses();
    }
  }, [dispatch, isLoggedIn]);

  const handleDisplayDrawer = useCallback(() => {
    dispatch(toggleDrawer());
  }, [dispatch]);
  const handleHideDrawer = useCallback(() => {
    dispatch(toggleDrawer());
  }, [dispatch]);
  const markNotificationAsRead = useCallback((id) => {
    dispatch(markAsRead(id));
  }, [dispatch]);

  const handleLogin = (email, password) => {
    dispatch(login({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <Notifications
        displayDrawer={displayDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        notifications={notifications}
        markNotificationAsRead={markNotificationAsRead}
      />
      <Header user={user} logOut={handleLogout} />
      <BodySectionWithMarginBottom title="News from the School">
        <p>Holberton School news goes here</p>
      </BodySectionWithMarginBottom>
      {!isLoggedIn ? (
        <BodySection title="Log in to continue">
          <Login login={handleLogin} />
        </BodySection>
      ) : (
        <BodySection title="Course list">
          <CourseList courses={courses} />
        </BodySection>
      )}
      <Footer user={user} />
    </div>
  );
}

export default App;

