import React from 'react'
import { useReducer } from 'react'

/*
  버튼을 3개로 만들어서 각각 클릭을 했을 때,
  각각 값들이 변경될 수 있도록 reducer를 이용해서
  상태관리
*/

/*
  초기값 0 
  count의 시작점
*/
const initState = 0;

function reducer(state, action) {
  console.log("현재 action의 type: ",action.type);
  
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    case 'RESET':
      return 0;
  }
}

export default function Counter() {

  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div>Counter

      <h1>Count: { count } </h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>➕증가</button>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>➖감소</button>

      <button onClick={() => dispatch({ type: 'RESET' })}>🔁초기화</button>

    </div>
  )
}
