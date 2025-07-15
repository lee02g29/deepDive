import React, { useState } from 'react'

export default function Controlled() {

  const [input, setInput] = useState('');

  return (
    <div>
      <div>
        <input 
          placeholder='이름 입력'
        />
        <button onClick={(e) => setInput(e.target.value)}>출력</button>
      </div>
    </div>
  )
}
