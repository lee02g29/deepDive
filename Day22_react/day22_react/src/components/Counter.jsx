import React, { useState } from 'react'

export default function Counter() {

  // let count = 0;
  // // 카운트 숫자 저장하는 변수

  const [count, setCount] = useState(0);

  /*
    count : 현재 값(변수)
    setCount : 상태를 바꾸는 함수
    useState(0) :0으로 시작하는 저장소 만들기
    [현재값, 값을 바꾸는 함수] 식
  */

    // 이름을 변경하고 유지할 때 사용
    const [name, setName] = useState('A');
  
  function click() {
    // 클릭이 되었을 때, 실행하는 함수로 사용
    setCount(count + 1);
    setName("B")

  }

  return (
    <div>
      <p> 클릭 수 : {count} </p>
      <p> 이름 : {name}</p>
      <button onClick={click}> + 1</button>
    </div>
  )
}

/*
  함수형 컴포넌트에서 상태나 생명주기를 사용할 수 있게 도와주는
  도구 Hooks

  status(상태)
  - 리액트 안에서 변할 수 있는 값
  - 이 값이 바뀌면 리액트는 자동으로 그 컴포넌트들을 다시 렌더링해서
    화면에 새롭게 그림

  - 상태는 컴포넌트가 기억해야하는 값
  - 컴포넌트 안에서 변화하는 값을 담는 저장소

  일반 변수는 메모리에만 저장
  리액트는 이 값이 바뀌었는지 체크 못함
  -> 리액트는 가상 Dom + state 기반으로 하는 시스템이기 때문에
  내부적으로 state를 감시하고 변화가 있을 때만 다시 렌더링함

  일반 변수는 감시의 대상이 아님
  - let, const는 다시 렌더링 될 때 마다, 초기화(리셋)
  useState는 값이 바뀌면 다시 렌더링하고, 값도 유지
  */