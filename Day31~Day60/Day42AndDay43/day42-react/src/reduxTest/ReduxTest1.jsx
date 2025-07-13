import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

// 1. 슬라이스
/*  
    CreateSlice() : 리덕스의 상태 + reducer를 쉽게 만드는 함수
    reducers : key는 상태를 바꾸는 함수
  */
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const { increment, decrement } = counterSlice.actions;

/*
  앱 전체에서 사용할 상태 저장소(store)를 만듦
  여러개의 슬라이스가 있다면 reducer: {a, b, c}처럼 괸리함
*/
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default function ReduxTest1() {
  // 2. 카운터 컴포넌트
  /*
    useDispatch() : 리덕스 액션을 실행하는 훅
    useSelector() : 저장소에서 값을 읽음
  */
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h3>ReduxTest1</h3>
      <h4>{count}</h4>

      <button onClick={() => dispatch(increment())}> + 증가</button>
      <button onClick={() => dispatch(decrement())}> - 감소</button>
    </div>
  );
}

/*
  Redux
  - 전역 상태를 관리하는 외부 라이브러리
  - npm install을 통해 다운 받기
  - 여러 컴포넌트들이 공유해야하는 데이터를 한 곳에서 괸리하는 중앙 저장소(store)를 만들어주는 도구
  - 가장 오래된 리액트 상태관리 라이브러리 중 하나
  - 상태를 변경하려면 action -> reducer -> store

  store - 맵 전체 상태를 담는 중앙 저장소
  slice - 상태(state) + 상태 변경 함수(reduce)를 하나로 관리하는 단위
  dispatch - 액션을 발생시키는 함수
  useSelector - store에서 현재 상태를 가져오는 함수

  실행하는 순서
  1. 사용자가 어떤 행동을 함
  2. Action을 생성 -> 상태를 변경하고자 알림
  3. Dispatch -> action이 store로 전달됨
  4. reducer가 action을 보고 상태를 업데이트 함
  5. store가 업데이트 된 상태를 컴포넌트에 전달


  Redux를 사용하는 이유
  - 상태 흐름이 명확
  - 복잡한 앱에서도 상태 추적이 쉬움
  - 강력한 미들웨어 생태계
  - 앱의 규모가 크고, 상태가 여러 컴포넌트에서 공유하거나, 비동기 처리와 디버깅이 중요한 프로젝트에 적합

  reduxjs/toolkit
  - npm install @reduxjs/toolkit react-redux
  - boilerplate 반복적으로 복사 붙여넣기 하는 구조를 줄이고, 적은 코드로 리덕스와
  동일한 결과를 나타내기 위해 사용
  - 타입스크립트와 호환성 좋음
  - 실무 프로젝트에서 적합하고 규칙 기반의 상태관리를 쉽게 구현할 수 있음

  Recoil
  - 페이스북에서 만든 리액트 전용 상태관리 라이브러리
  - React에서 useState처럼 다루지만 전역 상태처럼 공유가 가능
  - 상태를 나눌 때, atom 단위로 나누고 여러 컴포넌트에서 이 atom을 사용할 수 있다
  
  
  Zustand
  - Context API를 대체할 수 있는 가벼운 상태 관리 라이브러리
  - 훅 기반 구조(useStore)로 매우 직관적

  Zustand를 사용하는 이유
  - Redux보다 가볍고, 설정이 거의 없음
  - 코드량이 적음
  - 컴포넌트 간 상태 공유가 매우 쉬움
*/
