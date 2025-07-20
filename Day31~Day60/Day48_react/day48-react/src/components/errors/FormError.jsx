import React from 'react'

// 에러만 관리하는 컴포넌트를 따로 만들어서 관리
export default function FormError({message}) {
  if(!message) return null;

  return <p style={{color: 'red', fontSize: '2rem'}}>{message}</p>
}
