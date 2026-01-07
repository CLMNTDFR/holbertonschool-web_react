import React from 'react';
import './CourseList.css';
import WithLogging from '../../components/HOC/WithLogging';

function CourseList({ courses = [] }) {
  return (
    <div className="CourseList">
      <table id="CourseList">
        <thead>
          {courses.length > 0 ? (
            <>
              <tr>
                <th colSpan="2">Available courses</th>
              </tr>
              <tr>
                <th>Course name</th>
                <th>Credit</th>
              </tr>
            </>
          ) : (
            <tr>
              <th colSpan="2">No course available yet</th>
            </tr>
          )}
        </thead>
        {courses.length > 0 && (
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.credit}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default WithLogging(CourseList);
