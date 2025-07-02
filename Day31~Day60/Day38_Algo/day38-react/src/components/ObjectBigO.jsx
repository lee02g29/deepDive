import React, { useState } from 'react'

export default function ObjectBigO() {

  const [user, setUser] = useState({
    firstName : 'lisa',
    isUser : true,
    favoritNumbers: [1,2,3,4]
  })

  // 연산 로그
  const [logs, setLogs] = useState([])

  const handleAll = () => {
    const output = [];

    // 접근법 O(1)
    output.push(`user.firstName -> ${user.firstName}`)

    // 존재 확인 O(1)

    /* hasOwnProperty() 자바 스크립트 및 리액트에서 사용가능
      기본 제공되는 함수(메서드) 객체 자신이 특정 키를 직접 가지고 있는지 확인해줌
      이 메서드는 Object.prototype에 만들어져있음
      -> 따라서 객체를 만들 때 자동으로 상속됨
      */
    output.push(`FirstName 확인 : -> ${user.hasOwnProperty('firstName')}`)
  
    // O(1) - 추가, 삭제
    const newUser = {...user, age:25};
    output.push('추가 : age -> 25')

    // O(n) = keys, values, entries
    const key = Object.keys(newUser)
    const value = Object.values(newUser)
    const entry = Object.entries(newUser)
    // entries: 키와 값을 동시에 가져옴
    
    output.push(`Keys🔑 O(n): ${JSON.stringify(key)}`);
    output.push(`Values O(n): ${JSON.stringify(value)}`);
    output.push(`entries O(n): ${JSON.stringify(entry)}`);

    console.log(output)

    setUser(newUser);
    setLogs(output)
  }

  return (
    <div>
      <h5>객체의 빅오</h5>
      <button onClick={handleAll}>실행</button>

      <div>
        <h4>현재 객체</h4>
        <p>{JSON.stringify(user,null,2)}</p>
      </div>

      <div>
        <h4>연산 로그:</h4>
        <ul>
          {
              logs.map((log, idx) => (
                <li key={idx}>{log}</li>
              ))
          }
        </ul>
      </div>
    </div>
  )
}
