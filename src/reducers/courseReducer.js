import { createReducer } from "@reduxjs/toolkit";

import {
  getCourses,
  favoriteCourse,
  unfavoriteCourse,
} from "../actions/courseActions";

const initialState = {
  data: [],
  endReached: false,
};

const findCourse = (state, courseId) => {
  return state.data.findIndex(({ id }) => id === courseId);
};
const actionHandlers = {
  [getCourses.fulfilled]: (state, { payload }) => {
    state.data = [...state.data, ...payload];
    if (!payload.length) state.reachedLastPage = true;
  },
  [favoriteCourse.fulfilled]: (state, { payload: courseId }) => {
    const index = findCourse(state, courseId);
    if (index >= 0) state.data[index].favorite = true;
  },
  [unfavoriteCourse.fulfilled]: (state, { payload: courseId }) => {
    const index = findCourse(state, courseId);
    if (index >= 0) state.data[index].favorite = false;
  },
};

export default createReducer(initialState, actionHandlers);
