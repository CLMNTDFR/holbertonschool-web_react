import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("test getFullYear", () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toEqual(currentYear);
});

test("test getFooterCopy", () => {
  const result = getFooterCopy(true);
  expect(result).toEqual("Holberton School");
});

test("test getFooterCopy", () => {
  const result = getFooterCopy(false);
  expect(result).toEqual("Holberton School main dashboard");
});

test("test getLatestNotification", () => {
  const result = getLatestNotification();
  expect(result).toEqual({
    __html: "<strong>Urgent requirement</strong> - complete by EOD",
  });
});
