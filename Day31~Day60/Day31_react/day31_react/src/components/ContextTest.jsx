import React from 'react'
import Parent from './Parent'

export default function ContextTest({user}) {
  return (
    <div>ContextTest

      <Parent user={user}/>

    </div>
  )
}

/*
  중간 컴포넌트들은 user값이 필요없고, 
  grandChild 컴포넌트만 내용을 출력하기 위해 값을 전달만 함

  단점 : 컴포넌트가 많아질수록 관리가 힘들어지고 코드도 지저분해짐
*/