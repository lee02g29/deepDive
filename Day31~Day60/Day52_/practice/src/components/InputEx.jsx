import React from "react";
import { useInput } from "../hooks/useInput";

export default function InputEx() {
  const nameInput = useInput('')

  return (
    <div>
      <input value={nameInput.input} onChange={nameInput.handleInput} 
      placeholder="내용을 입력하세요."/>
      <button onClick={nameInput.resetInput}>초기화</button>
      <p>{nameInput.input}</p>
    </div>
  );
}
