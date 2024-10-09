import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse(state, actions) {
      state.data.push({
        name: actions.payload.name,
        desc: actions.payload.desc,
        cost: actions.payload.cost,
        id: nanoid(),
      });
    },
    removeCourse(state, actions) {
      const updateCourses = state.data.filter((course) => {
        return course.id !== actions.payload;
      });
      state.data = updateCourses;
    },
    changeSearch(state, actions){
      state.searchTerm = actions.payload;
    }
  },
});

export const { addCourse, removeCourse,changeSearch } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
