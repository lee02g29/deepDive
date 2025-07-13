import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

/*
  순서
  - 입력 상태 관리 -> 유효성 검사 -> 액션 dispatch -> 상태 초기화
*/

export default function TodoInput() {

  // useState는 컴포넌트 안에서만 데이터를 유지하고 관리
  const [text, setText] = useState('');

  /*
    액션을 스토어에 보내는 역할로,
    상태를 변경하거나 비동기 호출을 할 때 사용
  */
  const dispatch = useDispatch();

  const handleAdd = () => {

    // 공백 체크
    if(text.trim() === "") return;

    /*
      액션에 입력값을 넘겨 호출 후, 
      그 결과를 만들어진 액션 객체를 redux store에 dispatch
      {type: todo/addTodo, payload : '새 할일 내용'}
    */
    dispatch(addTodo(text));

    setText('')
  }
  

  return (
<div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  )
}


