// Import Component from React for class component creation
import { Component } from 'react';

/**
 * WithLogging Higher-Order Component (HOC) that adds logging functionality to wrapped components.
 * Logs when a component mounts and unmounts to the console for debugging purposes.
 * @param {React.Component} WrappedComponent - The component to wrap with logging
 * @returns {React.Component} A new component class with logging capabilities
 */
const WithLogging = (WrappedComponent) => {
    // Create a class component that wraps the provided component
    class WithLoggingComponent extends Component {
        /**
         * Lifecycle method called after component mounts.
         * Logs the component name to console.
         */
        componentDidMount() {
            // Get component name, fallback to 'Component' if not available
            const componentName = WrappedComponent.name
                ? WrappedComponent.name
                : 'Component';
            // Log mount event
            console.log(`Component ${componentName} is mounted`);
        }

        /**
         * Lifecycle method called before component unmounts.
         * Logs the component name to console.
         */
        componentWillUnmount() {
            // Get component name, fallback to 'Component' if not available
            const componentName = WrappedComponent.name
                ? WrappedComponent.name
                : 'Component';
            // Log unmount event
            console.log(`Component ${componentName} is going to unmount`);
        }

        /**
         * Render method that returns the wrapped component with all props passed through.
         * @returns {JSX.Element} The wrapped component
         */
        render() {
            // Pass all props to the wrapped component
            return <WrappedComponent {...this.props} />;
        }
    }

    // Set display name for debugging and React DevTools
    WithLoggingComponent.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`;
    // Return the enhanced component
    return WithLoggingComponent;
};

// Export the HOC
export default WithLogging;
