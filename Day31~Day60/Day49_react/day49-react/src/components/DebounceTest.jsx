import React, { useState } from 'react'

export default function DebounceTest() {

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value)
    console.log(text);
  }

  return (
    <div>
      <input onChange={handleChange} />
    </div>
  )
}

/*
  이 코드의 문제점

  1. 과도한 onChange(API 호출)
  - 사용자가 빠르게 입력만 해도 매 글자마다 서버 요청을 보내게 되어
  네트워크 과부하 및 UX 저하가 발생

  2. 성능 낭비(퍼포먼스 낭비)
  - 불필요한 렌더링이나 계산이 반복되어 UI에 버벅임이 있을 수 있음
*/