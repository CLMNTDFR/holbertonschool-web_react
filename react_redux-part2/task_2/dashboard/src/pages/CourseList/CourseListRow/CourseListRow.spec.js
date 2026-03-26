import { fireEvent, render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mockAxios from 'jest-mock-axios';
import coursesSlice, { fetchCourses } from '../../../features/courses/coursesSlice';
import CourseListRow from "./CourseListRow";
import CourseList from '../CourseList';

describe('CourseListRow', () => {
  const COURSES_DATA = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  let store;
  let consoleLogSpy;

  beforeAll(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  beforeEach(() => {
    store = configureStore({
      reducer: {
        courses: coursesSlice
      },
    });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('renders a header row with one cell', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
        </tbody>
      </table>
    );
    const headerCell = screen.getByRole('columnheader', { name: 'Available courses' });
    expect(headerCell).toHaveAttribute('colSpan', '2');
  });

  test('renders a header row with two cells', () => {
    render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={true}
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </tbody>
      </table>
    );

    const headerCell1 = screen.getByRole('columnheader', { name: 'Course name' });
    const headerCell2 = screen.getByRole('columnheader', { name: 'Credit' });
    expect(headerCell1).toBeInTheDocument();
    expect(headerCell2).toBeInTheDocument();
  });

  test('renders a regular row', () => {
    render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={false}
            textFirstCell="ES6"
            textSecondCell="60"
          />
        </tbody>
      </table>
    );

    const cell1 = screen.getByRole('cell', { name: 'ES6' });
    const cell2 = screen.getByRole('cell', { name: '60' });
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
  });

  test('calls onChangeRow when the checkbox is clicked', async() => {
    const promise = store.dispatch(fetchCourses());

    mockAxios.mockResponse({
      data: {
        courses: COURSES_DATA
      }
    });

    await promise;

    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    // Keep only body rows to validate checkbox behavior.
    const rows = screen.getAllByRole('row').filter(row => {
      return !row.querySelector('th');
    });

    expect(rows).toHaveLength(COURSES_DATA.length);

    rows.forEach((row, index) => {
      const course = COURSES_DATA[index];

      const cells = within(row).getAllByRole('cell');

      const checkbox = within(cells[0]).getByRole('checkbox');

      expect(cells[0]).toHaveTextContent(course.name);
      expect(cells[1]).toHaveTextContent(course.credit.toString());

      expect(checkbox).not.toBeChecked();

      fireEvent.click(checkbox);

      expect(checkbox).toBeChecked();
    });
  });

  test('renders a checked checkbox when isSelected is true', () => {
    const mockOnChangeRow = jest.fn();
    render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={false}
            textFirstCell="ES6"
            textSecondCell="60"
            id={1}
            isSelected={true}
            onChangeRow={mockOnChangeRow}
          />
        </tbody>
      </table>
    );

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();

    expect(mockOnChangeRow).not.toHaveBeenCalled();

    fireEvent.click(checkbox);

    expect(mockOnChangeRow).toHaveBeenCalledTimes(1);
    expect(mockOnChangeRow).toHaveBeenCalledWith(1, false); 
  });
});
