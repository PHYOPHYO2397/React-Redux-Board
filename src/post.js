import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "./data/DummyData";

const postSlice = createSlice({
  name: "posts",
  initialState: { value: PostsData },
  reducers: {
    addPosts: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addPosts } = postSlice.actions;
export default postSlice.reducer;
