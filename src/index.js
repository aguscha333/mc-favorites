import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./config/configureStore";
import applyDefaultInterceptors from "./httpClient/applyDefaultInterceptors";
import httpClient from "./httpClient";

import "./index.css";
import App from "./App";

const store = configureStore();
applyDefaultInterceptors(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
