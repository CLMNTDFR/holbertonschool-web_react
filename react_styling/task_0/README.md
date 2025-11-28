# Task 0. Set TailwindCSS

Copy over the task_5 directory from the React components project and rename it task_0

In order to add TailwindCSS to the project, you have to install the following npm package:
* `@tailwindcss/vite` and follow the docs to integrate successfully TailwindCSS v4

In the `src/main.css` file:
* Add a theme configuration that defines the Roboto font family
* Use Tailwind’s layer system to set Roboto as the default font for the entire application
* You’ll need to install this package `@fontsource/roboto`

In the `src/main.jsx` file:
* add appropriate import statements to include three different weights of the Roboto font:
    * Regular weight (400) for normal body text
    * Medium weight (500) for semi-emphasized text
    * Bold weight (700) for headings and strong emphasis

**Requirement:**
* You’re not allowed to create any TailwindCSS configuration file
* As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS
