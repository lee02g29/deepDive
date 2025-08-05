'use client'

import React, { useState } from 'react'

// 실시간으로 입력한 텍스트 값을 화면에 반영하는 client component
export default function InputMirror() {

  const [text, setText] = useState('')

  return (
    <div>
      <input type="text" value={text} 
      onChange={e => setText(e.target.value)}
      placeholder='여기에 값을 입력'/>
      <p>입력한 내용 : {text} </p>
    </div>
  )
}

/*
  You're importing a component that needs `useState`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive.

  - react 훅을 사용하려면, 상단에 'use client' 작성
  - next는 기본적으로 server component라고 생각해서, 별도 지시 없이 app/ 내에 컴포넌트로 처리함

  - onClick, onChange 등 브라우저 이벤트 핸들러를 사용하면 마찬가지로 오류가 발생함
  
*/