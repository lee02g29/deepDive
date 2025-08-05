import React, { useState } from "react";

export default function TodoList({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditComplete = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  return (
    <div>
      <input
        className="m-2 p-2"
        type="checkbox"
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <input
          className="border p-1 rounded"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditComplete}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleEditComplete();
          }}
          autoFocus
        />
      ) : (
        <span
          className={`cursor-pointer ${todo.isCompleted ? "line-through" : ""}`}
          onClick={handleEdit}
        >
          {todo.text}
        </span>
      )}
      <button
        className="border-1 pr-1 pl-1 rounded-md ml-2"
        onClick={() => onDelete(todo.id)}
      >
        X
      </button>
    </div>
  );
}
