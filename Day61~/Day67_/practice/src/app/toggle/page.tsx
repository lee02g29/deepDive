"use client";
import React, { useState } from "react";

export default function toggle() {
  const [toggle, setToggle] = useState<boolean>(true);


  function switches() {
    setToggle(!toggle)
  }


  return (
    <div>
      <h3 className="text-2xl px-4 py-2">toggle</h3>
      <p className="text-xl px-4 py-2">{toggle ? "on" : "off"}</p>
      <button
        onClick={() => switches()}
        className="border px-4 py-2 rounded-lg m-2"
      >
        스위치
      </button>
    </div>
  );
}
