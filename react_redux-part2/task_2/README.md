# Task 2 - Course Selection State

## Goal

Allow users to select or unselect courses from the CourseList table when logged in.

## Context

After performance and loading improvements in notifications, this task introduces interactive table state for courses.

## Implemented Changes

### Courses slice

- Added isSelected to each course entry when data is loaded.
- Added two reducers:
	- selectCourse(id): sets isSelected to true
	- unSelectCourse(id): sets isSelected to false

### CourseList

- Added onChangeRow(id, checked) handler.
- Dispatches selectCourse or unSelectCourse based on checkbox value.

### CourseListRow

- Added controlled checkbox input in each non-header row.
- Checkbox change forwards id and checked value through onChangeRow.
- Visual checked state stays synchronized with Redux state.

### Tests

- Added or updated tests for checkbox rendering and interaction.
- Verified store updates on select and unselect actions.

## Files

- dashboard/src/pages/CourseList/CourseList.jsx
- dashboard/src/pages/CourseList/CourseListRow/CourseListRow.jsx
- dashboard/src/features/courses/coursesSlice.js
- dashboard/src/pages/CourseList/CourseList.spec.js
- dashboard/src/pages/CourseList/CourseListRow/CourseListRow.spec.js

## Run

From task_2/dashboard:

```bash
npm install
npm test
npm run dev
```

## Validation Checklist

- Every course row includes a checkbox.
- Clicking a checkbox updates Redux selection state.
- UI checked state reflects Redux state.
- Tests pass with no warnings or lint errors.

## Learning Focus

Use controlled components to connect UI events to predictable Redux state transitions.