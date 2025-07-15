import React, { useState } from 'react'

export default function UseStates() {

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if(!username) newErrors.username = '이름은 필수입니다.'
    if(!email.includes("@")) newErrors.email = '이메일이 유효하지 않습니다.'
  }

  return (
    <div>
      <h3>UseState 방식(복잡함)</h3>
      <form onSubmit={handleSubmit}>
        <input type='text'  value={username} onChange={(e) => setUserName(e.target.value)} />
        <input type='text'  value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='text'  value={address} onChange={(e) => setAddress(e.target.value)} />      

        <button type='submit'>제출</button>
      </form>
    </div>
  )
}

/*
  - state가 많음
  - 여러 가지 필드를 더 입력받을 경우에는 더 많은 상태가 필요함
  - 에러처리를 각각 따로 작성해야함
  - 재사용이 어려움
  - 컴포넌트 리렌더링이 많아져 성능이 저하됨
  - 유효성 검사를 직접 구현하여 복잡해지고, 유지보수가 어려움
  - 복잡한 구조로 인해 버그가 발생할 가능성이 커짐
*/