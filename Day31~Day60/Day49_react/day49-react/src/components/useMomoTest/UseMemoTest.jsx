import React, { useMemo, useState } from 'react'

export default function UseMemoTest() {

  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // 카운트 값이 변경될 때만 계산 실행
  const double =  useMemo(() => {
    console.log("계산 실행")

    return count * 2;
  }, [count])

  return (
    <div>
      <h3>useMemo 예제</h3>
      <p>count: {count}</p>
      <p>2배 값: {double}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setOther(!other)}>다른 상태 변경</button>
    </div>
  )
}

/*
  useMemo
  - 비용이 많이드는 계산 결과를 캐시 가능
  - 계산 결과를 기억해주는 훅
  - 계산이 오래 걸리면 한번만 하고 기억하고자 함
  ex)
    - 여러 개의 점수를 계산하고 평균과 총점을 기억함
    - 값이 바뀌면 재 계산하지만, 그렇지 않으면 계산하지 않고 이전 값을 기억함

  사용하는 이유
  - JSX 안에 map, filter, sort, reduce 처럼 연산이 많은 작업이 계속 반복되면
  렌더링마다 계속 계산됨
  - 이것을 방지하기 위해 useMemo로 결과만 기억해서 다시 계산하지 않음

  쓰지 않으면
  - 리스트 필터링, 정렬, 
*/