import React from 'react'

export default function Users({user, address}) {
  return (
    <div>
      {/* 자바스크립트의 객체를 넘겨벋아서 정보를 출력 */}
      <h2>이름 : {user.name} </h2>
      <p>나이 : {user.age}</p>
      <p>주소 : {address} </p>
    </div>
  )
}
