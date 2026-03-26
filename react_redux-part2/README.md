# React Redux (Part 2)

This project focuses on practical Redux and React performance patterns through a progressive dashboard application.

Each task builds on top of the previous one:

1. Task 0: remove unnecessary re-renders in Notifications.
2. Task 1: add loading state handling for async notifications.
3. Task 2: implement course selection with Redux state updates.
4. Task 3: add memoized notification filtering selectors.

## Learning Objectives

By the end of this project, you should be able to explain and apply:

- Common React performance bottlenecks.
- How UI state separation can reduce rendering noise.
- Async state lifecycle in Redux Toolkit thunks.
- Memoized selectors with createSelector.
- Controlled UI interactions backed by global state.

## Environment

- OS target: Ubuntu 20.04 LTS
- Node.js: 20.x.x
- npm: 10.x.x
- Test runner: Jest 29.7.0

Global Jest installation expected by the school project:

```bash
npm install -g jest@29.7.0
```

## Project Structure

- task_0/dashboard: performance fix by decoupling drawer visibility from Redux data.
- task_1/dashboard: loading state added to notifications flow.
- task_2/dashboard: course row selection and deselection.
- task_3/dashboard: memoized filtering for notifications by type.

Each task is intentionally self-contained and includes its own dashboard folder.

## Setup Per Task

Run the following from any task dashboard directory:

```bash
npm install
npm run dev
```

## Test Commands

From a task dashboard directory:

```bash
npm test
```

To run a specific suite while iterating:

```bash
npm test -- Notifications
npm test -- CourseList
```

## Quality Checklist

Before submission, validate each task with the same checklist:

- Tests pass.
- No console warnings or runtime errors.
- No lint errors.
- README clearly explains what was implemented and why.

## Resources Used

- Understanding re-renders in React
- Memoized Selectors
- useState vs useRef

## Author Notes

This repository version was polished for final school submission with:

- improved in-code comments in English,
- clearer explanation of architectural choices,
- complete task-by-task documentation.