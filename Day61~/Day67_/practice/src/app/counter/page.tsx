"use client";

import React, { useState } from "react";

export default function counter() {
  const [counter, setCounter] = useState<number>(0);

  function calc(type: string) {
    if(type === "add") {
      setCounter(counter + 1)
    } else if(type === "minus") {
      setCounter(counter - 1)
    }
  }


  return (
    <div>
      <h3 className="text-2xl px-4 py-2">Counter</h3>
      <p className="text-xl px-4 py-2">{counter}</p>
      <button
        onClick={() => calc("add")}
        className="border px-4 py-2 rounded-lg m-2"
      >
        증가
      </button>
      <button
        onClick={() => calc("minus")}
        className="border px-4 py-2 rounded-lg m-2"
      >
        감소
      </button>
    </div>
  );
}
