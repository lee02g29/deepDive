import { createSlice } from '@reduxjs/toolkit';

// 크롬 브라우저는 v8 엔진에서 동작
const postsSlice = createSlice({
  name : 'posts',
  initialState : [],
  reducers: {
    createPost(state, action) { // 생성
      state.push({
        id : Date.now(),
        title : action.payload.title,
        body: action.payload.body
      });
    },
    // 삭제
  }
})

export const { createPost } = postsSlice.actions;
export default postsSlice.reducer;