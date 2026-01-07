import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import courseReducer from './courseSlice';
import notificationReducer from './notificationSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer,
  notifications: notificationReducer,
});

export default rootReducer;