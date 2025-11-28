# Task 2. Update the Notifications Panel

In this task_2 you’ll continue converting the CSS rules into Tailwind classes:

In the `main.css`:
* Add 3 color variables:
    * `--main-color: #e1003c`
    * `--default-notification-item: blue`
    * `--urgent-notification-item: red`

In the `NotificationItem.jsx`:
* Use the notification colors defined above where you:
    * Apply notification colors based on the item type e.i: default = blue or urgent = red
    * Consider how to reference the new color variables within Tailwind class names for text colors

In the `Notifications.jsx`:
* Make sure to set the title Your Notifications at right and on top of the notification panel
* Ensure that surround the notification panel with a dashed border with the color variable `--main-color`
* The notification panel should occupy approximately 25% of the page width on desktop screens
* Adding a padding from all sides around the notification items of 6px using the appropriate tailwindcss class

**Requirements:**
* Remove the styles tests from the `NotificationItem.spec.js` file
* Your final UI should be the same as shown in the screenshots below
* Don’t remove any existing classes or ids
* You’re not allowed to create any TailwindCSS configuration file
* As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS
* No CSS file import statement in both components
* No `src/Notifications/*.css` files allowed
