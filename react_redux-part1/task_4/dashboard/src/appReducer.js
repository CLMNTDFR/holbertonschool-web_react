// This file defines the Redux reducer for the dashboard application.
// It manages the global state of the app, including user authentication,
// notifications, courses, and UI elements like the drawer.
// The reducer handles actions dispatched from components to update the state immutably.

export const APP_ACTIONS = {
    // Action type for user login
    LOGIN: 'LOGIN',
    // Action type for user logout
    LOGOUT: 'LOGOUT',
    // Action type to toggle the visibility of the navigation drawer
    TOGGLE_DRAWER: 'TOGGLE_DRAWER',
    // Action type to mark a specific notification as read
    MARK_NOTIFICATION_READ: 'MARK_NOTIFICATION_READ',
    // Action type to set the list of notifications
    SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
    // Action type to set the list of courses
    SET_COURSES: 'SET_COURSES'
};

// Initial state object defining the default values for the application state
export const initialState = {
    // Boolean indicating whether the navigation drawer is displayed
    displayDrawer: true,
    // Object containing user authentication details
    user: {
        // User's email address
        email: '',
        // User's password (should be handled securely in production)
        password: '',
        // Boolean indicating if the user is currently logged in
        isLoggedIn: false,
    },
    // Array of notification objects
    notifications: [],
    // Array of course objects
    courses: [],
};

/**
 * Redux reducer function for the dashboard application.
 * It takes the current state and an action, and returns a new state based on the action type.
 * The state is updated immutably using the spread operator.
 * @param {Object} state - The current state of the application (defaults to initialState)
 * @param {Object} action - The action object containing type and payload
 * @returns {Object} The new state after applying the action
 */
export function appReducer(state = initialState, action) {
    // Switch statement to handle different action types
    switch (action.type) {
        // Handle user login action
        case APP_ACTIONS.LOGIN:
            return {
                // Spread the existing state to maintain immutability
                ...state,
                // Update the user object with login details
                user: {
                    // Set the user's email from the action payload
                    email: action.payload.email,
                    // Set the user's password from the action payload
                    password: action.payload.password,
                    // Mark the user as logged in
                    isLoggedIn: true
                }
            };

        // Handle user logout action
        case APP_ACTIONS.LOGOUT:
            return {
                // Spread the existing state
                ...state,
                // Reset the user object to logged out state
                user: {
                    // Clear the email
                    email: '',
                    // Clear the password
                    password: '',
                    // Mark the user as logged out
                    isLoggedIn: false
                },
                // Clear the courses list on logout
                courses: []
            };

        // Handle setting notifications
        case APP_ACTIONS.SET_NOTIFICATIONS:
            return {
                // Spread the existing state
                ...state,
                // Update the notifications array with the payload
                notifications: action.payload
            };

        // Handle setting courses
        case APP_ACTIONS.SET_COURSES:
            return {
                // Spread the existing state
                ...state,
                // Update the courses array with the payload
                courses: action.payload
            };

        // Handle toggling the drawer visibility
        case APP_ACTIONS.TOGGLE_DRAWER:
            return {
                // Spread the existing state
                ...state,
                // Toggle the displayDrawer boolean
                displayDrawer: !state.displayDrawer
            };

        // Handle marking a notification as read
        case APP_ACTIONS.MARK_NOTIFICATION_READ:
            return {
                // Spread the existing state
                ...state,
                // Filter out the notification with the specified ID
                notifications: state.notifications.filter(
                    // Keep notifications that do not match the ID to remove
                    notification => notification.id !== action.payload
                )
            };

        // Default case: return the current state unchanged
        default:
            return state;
    }
}
