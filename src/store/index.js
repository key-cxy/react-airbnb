import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
console.log(entireReducer, 111);
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
  },
});

export default store;
