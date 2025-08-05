"use client";

import React, { useState } from "react";
import AddTodos from "./AddTodos";
import TodoList from "./TodoList";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo.trim(), isCompleted: false },
      ]);
    }
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleEditTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <AddTodos onAdd={handleAddTodo} />

      {todos.map((todo, index) => (
        <TodoList
          key={index}
          todo={todo}
          onToggle={handleToggle}
          onEdit={handleEditTodo}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
}
