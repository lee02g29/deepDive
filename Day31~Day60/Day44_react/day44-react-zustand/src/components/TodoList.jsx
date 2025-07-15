import React from 'react'
import { useTodoStore } from '../app/TodoStore'

export default function TodoList() {

  const todos = useTodoStore((state) => state.todos)
  const removeTodo = useTodoStore((state) => state.removeTodo)

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={ () => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
