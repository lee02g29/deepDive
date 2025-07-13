import { configureStore } from "@reduxjs/toolkit"
import todosReducer from '../features/todoSlice'

// 저장소 생성
const store = configureStore({
  reducer: {
    todos: todosReducer,
  }
})

// export default라는 문법은 동시에 쓰는 것을 허용하지 않음
export default store;

/*
  로직
  - 프로그램이 어떻게 동작할지 결졍하는 규칙과 흐름
  - 조건문, 반목문, 함수실행, 상태 변경, API 호출 등 실제 동작등을
  정의한 코드
  - 사용자 행동에 따라 어떤 처리를 할지 결정하는 코드 묶음
  - 개발을 할 때, 로직을 작성할 때는 js 확장자로 작성하는 경우가 많음. jsx로 바꿀 수는 있음

*/