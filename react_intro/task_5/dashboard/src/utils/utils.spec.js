// task_3/dashboard/src/utils.spec.js
import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
  test('getCurrentYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  test('getFooterCopy(true) returns "Holberton School"', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy(false) returns "Holberton School main dashboard"', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns correct HTML string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
  
});
