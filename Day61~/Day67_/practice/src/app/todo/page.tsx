"use client";
import React, { useState } from "react";

export default function todoList() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  function addTodoList() {
    if (input.trim()) {
      setTodoList((prev) => [...prev, input]);
      setInput("");
    }
  }

  function removeTodoList(keyword: string) {
    setTodoList(todoList.filter((todo) => todo !== keyword));
  }

  return (
    <div>
      <h3 className="text-2xl px-4 py-2">todoList</h3>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="border px-4 py-2 rounded-lg m-2"
      />
      <button
        onClick={() => addTodoList()}
        className="border px-4 py-2 rounded-lg m-2"
      >
        등록
      </button>

      <div>
        <ul>
          {todoList.map((todo) => (
            <li key={todo} className="px-4 py-2 text-lg">
              - {todo}
              <button
                className="border px-2 py-1 rounded-lg m-2"
                onClick={() => removeTodoList(todo)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
