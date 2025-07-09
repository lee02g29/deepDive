import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, removeTodo } from '../features/todoSlice'


export default function TodoList() {
  /*
    useSelector();
    - 전역 스토어에서 필요한 데이터를 꺼내는 훅
   */
  const { todos, isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch()

  // 화면이 처음 보일 때, todos 리스트가 업데이트 될 떄마다 목록 가져옴
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch]);

  if(isLoading) {
    return <p>로딩중</p>
  }

  if(error) {
    return <p>에러 발생 : {error}</p>
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(
              removeTodo(todo.id)
            )}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
  삭제 구현
  1. dispatch 이용해서 이벤트 발생시 처리
*/