# Task 3. Update the remained styles

In this task you will convert the rest of the components styles to use Tailwind instead

In the `Header.jsx`:
* Convert existing CSS rules to Tailwind classes
* Use the `--main-color` for the heading text color
* Consider the layout structure and alignment of logo and title (think about using flexbox)

In the `Login.jsx`:
* Ensure the top border uses the `--main-color` variable
* Convert the form layout to use Tailwind classes (think about using flexbox)
* The Login UI should match the provided screenshot

In the `BodySectionWithMarginBottom.jsx` & `BodySection.jsx`:
* Convert existing CSS rules to Tailwind classes
* Adjust spacing and typography using Tailwind’s design system, e.i: margins, padding, and text styling

In the `Footer.jsx`:
* Ensure the top border color uses the `--main-color` variable
* Convert existing styling to Tailwind classes
* Consider text styling and layout alignment
* Position the Footer at the bottom of the layout container, ensuring it stays fixed to the bottom edge across all viewport sizes and content lengths

**Requirements:**
* Your final UI should be the same as shown in the screenshots below
* Don’t remove any existing classes or ids
* You’re not allowed to create any TailwindCSS configuration file
* As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS
* No CSS file import statement in all components
* No `*.css` files allowed (except for the main.css that’s already provided)
