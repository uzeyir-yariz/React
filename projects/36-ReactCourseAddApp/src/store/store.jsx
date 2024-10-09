import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/FormSlice";
import { courseReducer } from "./slices/CourseSlice";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    form: formReducer,
  },
});
