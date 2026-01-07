import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayDrawer: true,
  notifications: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.displayDrawer = !state.displayDrawer;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    markAsRead: (state, action) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('TOGGLE_DRAWER', (state) => {
        state.displayDrawer = !state.displayDrawer;
      })
      .addCase('MARK_NOTIFICATION_READ', (state, action) => {
        state.notifications = state.notifications.filter(n => n.id !== action.payload);
      });
  },
});

export const { toggleDrawer, setNotifications, markAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
