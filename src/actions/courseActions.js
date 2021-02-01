import { createAsyncThunk } from "@reduxjs/toolkit";

import courseServices from "../services/courseService";

export const getCourses = createAsyncThunk("/courses", async (params) => {
  try {
    const { data } = await courseServices.index(params);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const favoriteCourse = createAsyncThunk(
  "/favorite",
  async (courseId) => {
    try {
      const { data } = await courseServices.favoriteCourse(courseId);
      return data.courseId;
    } catch (error) {
      console.log(error);
    }
  }
);

export const unfavoriteCourse = createAsyncThunk(
  "/unfavorite",
  async (courseId) => {
    try {
      await courseServices.unfavoriteCourse(courseId);
      return courseId;
    } catch (error) {
      console.log(error);
    }
  }
);
