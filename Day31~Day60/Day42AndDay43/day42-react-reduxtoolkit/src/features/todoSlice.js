// 하나의 기능 단위 모듈

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchTodos } from "./FetchTodos";


// 비동기 Thunk
export const getTodos = createAsyncThunk(
  "todo/getTodos",
  async(_, thuckAPI) => {
    try {
      const resp = await FetchTodos();
      console.log("Thunk 응답 : ", resp)
      return resp;
    } catch(error) {
      /*
        실패시에는 에러메시지를 따로 담아서 리덕스에게 전달하기 위해서,
        thuckAPI 변수에 여러 개의 객체를 담아옴
      return thuckAPI.rejectWithValue(); 에러메시지를 담아서 rejected 액션으로 넘김
      payload에 에러 상태가 들어감
      */
      return thuckAPI.rejectWithValue(error.message);
    }
  }
)

/*
  createSlice()
  - 상태와 상태를 바꾸는 reducer를 한 파일에서 한 번에 만드는 함수
*/

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};
/*
  createSlice()
  - key 값은 고정되어있기 때문에 store에서 key를 확인하고 저정소를 만들어,
  그안에 리듀서를 저장하고 관리함
  name, initialState, reducers
*/
const todoSlice = createSlice({
  name: "todos",
  initialState, // initialState: '변수명'도 가능
  reducers: {
    // 액션과 상태 변경 로직을 정의
    addTodo(state, action) {
      state.todos.push({
        id: Date.now(), // 현재 시간을 기준으로 id 부여
        title: action.payload, // 입력한 텍스트가 제목
      });
    }, // 새 할일을 todos 배열에 추가하는 함수
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  },
  /*
    비동기 액션인 실행을 하면, 자동으로 상태 전환을 해서 저장하는 함수
    addCase(action, reducerFunction)
    - 비동기 액션 중에 특정 상태가 발생했을 때, 어떤 상태를 바꿀지 정의하는 함수
  */
  extraReducers: (builder) => {
    builder
      // 데이터 요청중 - pending
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true; // 로딩 표시
        state.error = null;
      }) // 비동기 시작

      .addCase(getTodos.fulfilled, (state,action) => {
        state.isLoading = false;
        state.todos = action.payload; // 응답 데이터 저장
      }) // 성공

      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }) // 실패
  }
});

// 액션과 리듀서를 내보냄
export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;

/*
  액션 객체는 기본적으로 {type, payload} 형태를 가짐
  type : 무슨 일이 일어났는지 나타내는 문자열
  {type : 'todos/removeTodo', payload: todo.id}
  payload : 액션과 함께 전달된 추가 데이터, 혹은 삭제 데이터가 담긴 변수
*/