/**
 * BodySection component for structuring content sections in the dashboard.
 * Renders a section with a title heading and child content.
 * @param {Object} props - Component props
 * @param {string} props.title - The title text to display as heading
 * @param {React.ReactNode} props.children - Child elements to render inside the section
 * @returns {JSX.Element} The rendered BodySection component
 */
export default function BodySection({ title, children }) {
    // Render the section with title and children
    return (
        <div className='bodySection'>
            {/* Display the section title as h2 heading */}
            <h2>{title}</h2>
            {/* Render any child components or elements */}
            {children}
        </div>
    )
}
