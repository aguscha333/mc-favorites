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

export const favoriteCourse = createAsyncThunk("/favorite", async (course) => {
  try {
    const { data } = await courseServices.favoriteCourse(course);
    return data.courseId;
  } catch (error) {
    console.log(error);
  }
});

export const unfavoriteCourse = createAsyncThunk(
  "/unfavorite",
  async (course) => {
    try {
      await courseServices.unfavoriteCourse(course);
      return course.courseId;
    } catch (error) {
      console.log(error);
    }
  }
);
