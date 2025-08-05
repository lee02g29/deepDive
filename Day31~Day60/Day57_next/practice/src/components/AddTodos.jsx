"use client";

import React, { useState } from "react";

export default function AddTodos({ onAdd }) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    onAdd(input);
    setInput("");
  };

  return (
    <div>
      <input
        placeholder="add Todos..."
        className="border-1 rounded-xl p-2 "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="border-1 rounded-xl p-2 bg-black text-white" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
