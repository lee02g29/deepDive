import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/postsSlices'

export const store = configureStore({
  reducer : {
    posts: postReducer,
  }
})