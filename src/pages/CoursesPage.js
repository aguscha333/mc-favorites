import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  favoriteCourse,
  getCourses,
  unfavoriteCourse,
} from "../actions/courseActions";

import CourseItem from "components/CourseItem";

const CoursesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses({}));
  }, [dispatch]);

  const courses = useSelector(({ courseReducer }) => courseReducer.data);

  const handleOnCoursePressed = useCallback(
    ({ id, favorite }) => {
      const action = favorite ? unfavoriteCourse : favoriteCourse;
      dispatch(action(id));
    },
    [dispatch]
  );

  return (
    <div className="courses-list">
      {courses.map((item) => (
        <CourseItem key={item.id} item={item} onPress={handleOnCoursePressed} />
      ))}
    </div>
  );
};

export default CoursesPage;
