import React, { useEffect, useState } from 'react'

/*
  입력 값이나 상태가 짧은 시간에 계속 바뀌는 것을 잠시 기다렸다가 반영해주는 커스텀 훅
  검색창, 자동완성, API 요청에 최적화

  value : 감시할 값(사용자가 입력한 검색어)
  delay : 값이 변한 후 얼마나 기다릴지
*/
export default function useDebounce(value, delay=500) {

  const [debounced, setDebounced] = useState(value);

  useEffect(()=>{
    const timer = setTimeout(() => setDebounced(value), delay)

    return () => clearTimeout(timer)
    // 타이핑 도중 clearTimeout()으로 이전 타이머를 취소. 계속 기다렸다가 마지막값만 적용
  }, [value, delay])

  return debounced;
}
