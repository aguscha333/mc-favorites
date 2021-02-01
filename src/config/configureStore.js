import { configureStore as config } from "@reduxjs/toolkit";

import reducer from "../reducers";

const configureStore = () => {
  const store = config({
    reducer,
  });

  return store;
};

export default configureStore;
