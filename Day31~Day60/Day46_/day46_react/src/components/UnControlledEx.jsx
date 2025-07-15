import React, { useRef } from 'react'

export default function UnControlledEx() {

  const inputRef = useRef();

  const handleClick = () => {
    alert(inputRef.current.value)
  }

  return (
    <div>
      <input ref={inputRef} placeholder='이름을 입력해주세요'/>
      <button onClick={handleClick}>출력</button>
    </div>
  )
}
{/* 
  폼 관리에 대한 개념
  - UnControlled Components
    - React가 값을 직접 관리하지 않고 DOM이 값을 자체적으로 관리하는 방식
    - 필요할 때만 ref를 통해서 값을 가져오는 방식
    - 브라우저에게 맡기고 나중에 필요할 때만 가져다 쓰는 방식
    - 코드가 간단하고 리렌더링이 줄어들어 성능상 유리함

    ex) 간단한 입력값만 있고, 빠른 개발이 필요할 때

  - Controlled Components
    - React가 input, textarea, select 등의 값을 state로 직접 관리하는 방식
    - 사용자가 값을 입력할때마다 onChange 이벤트로 상태를 업데이트하고 그 상태가 컴포넌트에 반영됨
    - 상태관리, 유효성 검사, 동기화가 쉽고 일관됨
*/}