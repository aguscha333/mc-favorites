import React from "react";

import CoursesPage from "pages/CoursesPage";
import NotFoundPage from "pages/NotFoundPage";

const routes = [
  {
    path: "/courses",
    component: <CoursesPage />,
  },
  {
    path: "*",
    component: <NotFoundPage />,
  },
];

export default routes;
