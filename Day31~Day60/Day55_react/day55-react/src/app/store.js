import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../features/posts/postApi";
import { commentApi } from "../features/Comment/CommentApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware).concat(commentApi.middleware)
});

/*
  configureStore() - Redux Toolkit에서 제공하는 함수
  createStore보다 간산하게 설정가능
  reducer, middleware등의 설정을 포함
*/

/*
  [postApi.reducerPath]: postsApi.reducer : redux에 reducer 설정
*/

// ----

/*
  reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducer
  -reducer 추가
*/