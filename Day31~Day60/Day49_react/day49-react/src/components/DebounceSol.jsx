import React, { useCallback, useState } from 'react'
import { debounce } from 'lodash'

export default function DebounceSol() {

  const debounceChange = useCallback(
    debounce((value) => {
      console.log("api 호출 : ", value)
    }, 300), []
  );

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value)
    debounceChange(e.target.value);
  }

  return (
    <div>
      <h3>Debounce를 이용한 성능 향상</h3>
      <input onChange={handleChange} />
      <p>{text}</p>
    </div>
  )
}

/*
  Debounce
  - 입력이 멈춘 뒤 일정 시간이 지나면 한 번만 호출

  useCallback
  - 리액트에서 제공하는 훅
  - 함수를 메모이제이션해서, 리렌더링 시 불필요한 함수 재생성을 막아주는 리액트 훅
  - useCallback(fn, deps)
    - fn : 재 사용하고 싶은 함수
    - deps : 의존성 배열(이 값이 변하면 새 함수 호출)
    - 함수를 기억했다가, 필요할 때만 새로운 함수 호출
 */