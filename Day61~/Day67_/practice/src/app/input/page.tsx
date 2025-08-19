"use client"

import React, { useState } from 'react'

export default function input() {

  const [input, setInput] = useState<string>('');

  return (
    <div>
      <h3 className="text-2xl px-4 py-2">Input</h3>
      <p className="text-xl px-4 py-2">{input}</p>
      <input 
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="border px-4 py-2 rounded-lg m-2"
      />
    </div>
  )
}
