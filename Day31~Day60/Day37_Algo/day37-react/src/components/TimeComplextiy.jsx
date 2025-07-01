import React, { useState } from "react";

export default function TimeComplextiy() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResults] = useState("");
  const [time, setTime] = useState("");

  const handleSum = () => {
    const numA = Number(a);
    const numB = Number(b);

    /*
      performance.now()
      - 타이머
      - 페이지가 로드된 이후, 경과 시간을 밀리초 단위로 
      소수점 여섯자리로 반환
      - end - start로 특정 코드 블록의 실행 시간을 계산할 수 있음
    */

    const start = performance.now();
    const sum = numA + numB;

    const end = performance.now();
    setResults(sum);
    setTime((end - start).toFixed(6)) // 6자리
  }
  return (
    <div>
      <h4>시간 복잡도</h4>
      <input type="text" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="text" value={b} onChange={(e) => setB(e.target.value)} />
    
      <button onClick={handleSum}>합 구하기</button>

      {
        result !== null && (
          <p>결과: {result}({time}ms)</p>
        )
      }
    </div>
  );
}

/*
  시간 복잡도(TimeComplextiy)
  - 입력 크기 n이 커졌을 때, 코드가 얼마나 느려지는지를 수학적으로 표현한 것
  - 시간 복잡도는 느려지기 전에 예방하는 속도 가이드라인
  - O(n log n) 선형 로그(병합 정렬, 퀵 정렬)
  - O(log n) 로그 이진 탐색
*/
