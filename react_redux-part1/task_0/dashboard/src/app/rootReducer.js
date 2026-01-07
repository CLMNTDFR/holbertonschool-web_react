import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import notificationsReducer from '../features/notifications/notificationsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
});

export default rootReducer;