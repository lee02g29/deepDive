import { useState } from "react";

export function useToggle(initalValue = false) {
  const [isOpen, setIsOpen] = useState(initalValue);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const setTrue = () => {
    setIsOpen(true)
  }

  const setFalse = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    toggle,
    setTrue,
    setFalse
  }
}