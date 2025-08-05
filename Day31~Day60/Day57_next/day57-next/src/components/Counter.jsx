'use client'

import React, { useState } from 'react'

// Client Component 예제
export default function Counter() {

  const [count,  setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>증가 + </button>
      {/* <button onClick={() => setCount(count - 1)}>감소 - </button> */}
      <p>클릭 수 : {count}</p>
    </div>
  )
}

/*
  리액트 훅을 이용해서 카운트 값을 관리(변수)
  useState 사용 -> 위에 use clinet
*/