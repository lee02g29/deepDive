import { useState } from "react";

export function useTodo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, done: false }]);
      setInput("");
    }
  };

  const ToggleTodo = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  };

  return {
    input, setInput, setTodos, todos, addTodo, ToggleTodo
  }
}