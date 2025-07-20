import { debounce } from 'lodash'
import React from 'react'

export default function LodashTest() {

  const showText = debounce(
    (text) => {
      console.log('입력한 내용 : ' + text)
      alert('입력한 내용 : ' + text)
    }, 1000
  );

  return (
    <div>
      <h3></h3>
      {/* 글자 입력 후 1초 기다렸다가 실행 */}
      <input onChange={(e) => showText(e.target.value)} 
      placeholder='글자 입력 후 잠시 대기'/>
    </div>
  )
}

/*
  Lodash 라이브러리
  - npm install lodash
  - 자바 스크립트에서 자주 사용되는 기능을 모아놓은 범용 유틸리티 함수 라이브러리
  - 배열, 객체, 문자열, 날짜, 수학 등 다양한 연산을 간단하게 처리 가능
  - 개발자들이 성능을 위해 성능 최적화용 debonce, throttle 함수를 많이 사용하고 있음
    - lodash와 useCallback 같이 사용함
*/