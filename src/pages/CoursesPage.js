import React, { useEffect, useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  favoriteCourse,
  getCourses,
  unfavoriteCourse,
} from "../actions/courseActions";

import CourseItem from "components/CourseItem";

const CoursesPage = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const handleGetPage = useCallback(
    (page = 1) => {
      dispatch(getCourses({ page, limit: 10 }));
    },
    [dispatch]
  );

  const handleGetNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page, setPage]);

  useEffect(() => {
    handleGetPage(page);
  }, [handleGetPage, page]);

  const { data: courses, endReached } = useSelector(
    ({ courseReducer }) => courseReducer,
    shallowEqual
  );

  const handleOnCoursePressed = useCallback(
    ({ id, favorite }) => {
      const action = favorite ? unfavoriteCourse : favoriteCourse;
      dispatch(action(id));
    },
    [dispatch]
  );

  return (
    <InfiniteScroll
      dataLength={courses.length}
      next={handleGetNextPage}
      hasMore={!endReached}
      loader={<div>Loading...</div>}
    >
      <div className="courses-list">
        {courses.map((item) => (
          <CourseItem
            key={item.id}
            item={item}
            onPress={handleOnCoursePressed}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default CoursesPage;
