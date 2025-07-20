import { throttle } from 'lodash'
import React from 'react'

export default function ThrottlingTest2() {

  const handleClick = throttle(() => {
    console.kog('클릭됨')
  }, 2000)

  return (
    <div>
      {/* 버튼 클릭시 너무 많이 누르지 못하게 설정 */}

      <h4>버튼 스로틀</h4>
      <button onClick={handleClick}>눌러도 2초에 한 번씩 반응</button>
    </div>
  )
}
