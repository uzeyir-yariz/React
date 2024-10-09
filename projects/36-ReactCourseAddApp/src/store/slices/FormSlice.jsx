import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./CourseSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    desc: "",
    cost: 0,
  },
  reducers: {
    changeName(state, actions) {
      state.name = actions.payload;
    },
    changeDesc(state, actions) {
      state.desc = actions.payload;
    },
    changeCost(state, actions) {
      state.cost = actions.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCourse, (state) => {
      state.name = "";
      state.desc = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeDesc, changeCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
