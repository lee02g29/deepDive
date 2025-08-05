import React, { useState } from "react";

export function useSearchableInput(initialValue = "") {
  const [inputValue, setInputValue] = useState(initialValue);
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
    setSearchTerm(value);
  };

  const resetInput = () => {
    setInputValue("");
    setSearchTerm("");
  };

  const resetSearchTerm = () => {
    setSearchTerm("");
  };

  return {
    inputValue,
    setInputValue,
    setSearchTerm,
    searchTerm,
    handleInputChange,
    resetInput,
    resetSearchTerm
  }
}
