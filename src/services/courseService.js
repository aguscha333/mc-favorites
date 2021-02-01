import httpClient from "../httpClient";

class CourseServices {
  static index({ page = 1, limit = 10 }) {
    return httpClient.get(`/courses`, {
      params: {
        email: process.env.REACT_APP_USER_EMAIL,
        "page[offset]": page,
        "page[limit]": limit,
      },
    });
  }

  static favoriteCourse(courseId) {
    return httpClient.post("/favorite", {
      courseId,
      email: process.env.REACT_APP_USER_EMAIL,
    });
  }

  static unfavoriteCourse(courseId) {
    return httpClient.delete("/favorite", {
      data: {
        courseId,
        email: process.env.REACT_APP_USER_EMAIL,
      },
    });
  }
}

export default CourseServices;
