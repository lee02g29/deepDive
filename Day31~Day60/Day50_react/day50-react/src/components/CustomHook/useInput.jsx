import React, { useState } from 'react'

/*
  단순히 커스텀 훅을 만들기 위해서 사용함
  화면에 태그를 만드려고 하는 것이 아님
  -> 소문자로 이름을 작성해도 됨
*/
export default function useInput(initial = '') {

  const [value, setValue] = useState(initial);
  const onChange = e => setValue(e.target.value);
  const reset = () => setValue('')

  return {value, onChange, reset}
}

/*
  이 커스텀 훅의 효과
  - 텍스트 입력 상태를 간단하게 관리 가능

  간단하게 값만 관리할 때는 커스텀 훅으로 useInput으로 만들어서 사용하는 것이 좋음
  여러 개의 필드를 한 곳에서 괸리함
  유효성 검사, 제출이 필요할 때는 useForm을 사용하기
*/