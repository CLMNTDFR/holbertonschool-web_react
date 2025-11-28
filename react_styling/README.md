# React styling


## Description
Resources
Read or watch:
* [Tailwindcss](https://tailwindcss.com/)
* [Integrate Tailwindcss to an existing React project](https://tailwindcss.com/docs/guides/vite)
* [Tailwindcss configuration](https://tailwindcss.com/docs/configuration)
* [Tailwindcss v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide)
* [Tailwind Layer Directive](https://tailwindcss.com/docs/functions-and-directives#layer)
* [Tailwind Border color](https://tailwindcss.com/docs/border-color)
* [Default spacing scale in Tailwind](https://tailwindcss.com/docs/customizing-spacing)
* [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design)
* [Tailwind animation](https://tailwindcss.com/docs/animation)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* How to integrate and utilize TailwindCSS v4 within an existing React application without configuration files
* How to declare and use CSS custom properties for consistent theming and color management
* How to apply conditional styling based on component props
* How to implement responsive design using Tailwind’s breakpoint syntax for adapting UI across different screen sizes
* How to create and apply animations using Tailwind’s utility classes

## Requirements
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 10.x.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* A README.md file, at the root of the project’s folder and each task’s folder, is mandatory
* Install Jest globally: npm install -g jest
* Install TailwindCSS version 4..
* All your tasks will be tested on a headless chrome browser

## Tasks

### 0. Set TailwindCSS
**mandatory**

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

**Repo:**
* GitHub repository: `holbertonschool-web_react`
* Directory: `react_styling`
* File: `task_0/dashboard/src/main.css`, `task_0/dashboard/src/main.jsx`
