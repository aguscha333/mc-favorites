import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./config/routes";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ component, path }, index) => (
        <Route key={index} path={path}>
          {component}
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
