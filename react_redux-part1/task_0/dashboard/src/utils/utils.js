import { selectCourse } from '../app/courseSlice';

export function selectCourseAction(courseId) {
  return selectCourse(courseId);
}