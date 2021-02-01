import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <Link to="/courses">Go to courses</Link>
    </div>
  );
};

export default NotFoundPage;
