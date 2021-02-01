import React from "react";
import { shape, func } from "prop-types";

import { courseShape } from "constants/shapes";

const CourseItem = ({ item, onPress }) => {
  const { title, instructorImageUrl, instructorName, favorite } = item;
  return (
    <button className="course-item" onClick={() => onPress(item)}>
      <img
        className="course-item-thumbnail"
        src={instructorImageUrl}
        alt={`instructor ${instructorName}`}
      />
      <div className="course-item-texts">
        <h5>{title}</h5>
        <p>{instructorName}</p>
      </div>
      {!!favorite && (
        <img className="course-item-check" src="check.png" alt="favorite" />
      )}
    </button>
  );
};

CourseItem.propTypes = {
  course: shape(courseShape).isRequired,
  onClick: func.isRequired,
};

export default CourseItem;
