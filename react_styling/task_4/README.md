# Task 4. Go Responsive

In this task you’ll be asked to work on the responsiveness of your Holberton Dashboard application

In the `Notifications.jsx`:
* Make the notifications panel responsive, particularly for screen sizes below 912px
* Consider how notification items should occupy the viewport on smaller screens e.i: full width/height of the screen
* Adjust list styling of the notification items for mobile devices (think about bullet points and spacing)
* Add appropriate padding and border styling for notification items
* Consider positioning and layering when notification items are full-screen
* Adding a padding from all sides around the notification items of 12px on mobile/tablet screens using the appropriate tailwindcss class

In the `NotificationItem.jsx`:
* Implement responsive text sizing for different screen widths
* Add proper border and padding for list items on smaller screens

In the `App.jsx`:
* Create a responsive container structure for the entire application
* Adjust padding for different screen sizes
* Use flexbox layout to ensure proper content distribution across viewport heights

In the `Header.jsx`:
* Implement responsive layout that adapts to smaller screens (consider stacking vs horizontal layout)
* Adjust text sizes for breakpoints below 520px
* Maintain proper alignment and spacing across all device sizes

In the `Login.jsx`:
* Make form inputs appropriately sized on mobile screens
* Consider vertical vs horizontal layout for form elements on different screen sizes

In the `CourseList.jsx`:
* Ensure the course table remains responsive and properly sized

In the `Footer.jsx`:
* Implement responsive text sizing for various screen widths
* Consider footer positioning in the overall layout e.i: stick to the bottom

**Note:**
The long text used under the News from the school is intentionally to test responsive behavior in this section, and you’ll use it only for this task
text: `ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?`

**Requirements:**
* Your final UI should be the same as shown in the screenshots
* Don’t remove any existing classes or ids
* You’re not allowed to create any TailwindCSS configuration file
* No CSS file import statement in all components
* No `*.css` files allowed (except for the main.css that’s already provided)
