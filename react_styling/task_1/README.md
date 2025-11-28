# Task 1. Update CourseList and CourseListRow styles

Create a new folder task_1 and paste the task_0/dashboard folder into it

Create a new file main.css and make sure:
* Add 2 background color variables:
    * `--color-table-header: #deb5b5`
    * `--color-table-rows: #CDCDCD`

In the `CourseListRow.jsx`:
* Add the bg colors declared above conditionally whenever the table row is a header or a simple one
* Add the opacity of 66% for the header rows and 45% otherwise
* Add a border around the table’s cells with with the gray color and shade of 400
* Add a padding left of 8px for the td elements (you should use the appropriate tailwindcss class)

In the `CourseList.jsx`:
* The responsive container that wrapped your table should occupies 80% of the page width
* The table should expand to fill its container completely
* Center the container on the page with appropriate spacing
* The courses table should look consistent whether it contains data or is empty

**Requirement:**
* Your final UI must match provided screenshots
* Don’t remove any existing classes or ids
* You’re not allowed to create any TailwindCSS configuration file
* As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS
* No CSS file import statement in both components
* No `src/CourseList/*.css` files allowed
