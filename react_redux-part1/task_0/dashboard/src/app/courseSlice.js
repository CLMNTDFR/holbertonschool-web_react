import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
  },
  reducers: {
    selectCourse: (state, action) => {
      // Add logic if needed
    },
  },
});

export const { selectCourse } = courseSlice.actions;
export default courseSlice.reducer;