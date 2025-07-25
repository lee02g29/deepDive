import React from 'react'
import { useUserStore } from '../stores/userStore';

// Zustand에 넣었던 값을 보여주는 컴포넌트
export default function UserDisplay() {

  const name = useUserStore((state) => state.name);


  /*
    하나의 요소를 변경했을 때도, 에러가 발생할 경우에는
  상태 업데이트 확인 + 기다리기 
  */

  return (
    <div>
      <p>입력한 이름: {name}</p>
    </div>
  )
}
