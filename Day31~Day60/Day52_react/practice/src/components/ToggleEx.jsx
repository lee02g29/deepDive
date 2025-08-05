import React from "react";
import { useToggle } from "../hooks/useToggle";

export default function ToggleEx() {
  const {isOpen, toggle, setTrue, setFalse} = useToggle();

  return (
    <div>
      <button onClick={toggle}>열기/닫기</button>
      <button onClick={setTrue}>강제로 열기</button>
      <button onClick={setFalse}>강제로 닫기</button>
      <p>{isOpen ? '열림' : '닫힘'}</p>
    </div>
  );
}
