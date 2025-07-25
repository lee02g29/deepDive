import React from "react";
import { useTodo } from "../hooks/useTodo";

export default function TodoApp() {
  
  // 커스텀 훅 불러오기
  const {
    input, 
    todos,
    setInput,
    addTodo,
    ToggleTodo
  } = useTodo();

  return (
    <div>
      <input
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.map((todo, idx) => (
          <li
            key={idx}
            onClick={() => ToggleTodo(idx)}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
