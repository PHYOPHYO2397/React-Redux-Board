import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post";
const store = configureStore({
  reducer: { posts: postSlice },
});

export default store;
