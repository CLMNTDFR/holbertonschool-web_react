// Import React library for building user interfaces
import React from 'react';
// Import ReactDOM for rendering React components to the DOM
import ReactDOM from 'react-dom/client';
// Import the main App component
import App from './App';
// Import Provider component from react-redux to provide the Redux store to the app
import { Provider } from 'react-redux';
// Import the configured Redux store
import store from './app/store';

// Create a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the application wrapped in StrictMode for development warnings and Provider for Redux
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
