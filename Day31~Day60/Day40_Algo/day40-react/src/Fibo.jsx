import React, { useEffect, useState } from 'react'

export default function Fibo() {
  
  // 몇 번째까지 계산할지 지정하는 숫자
  const [n, setN] = useState(0);

  // 0 ~ n까지의 피보나치 값들을 담은 배열
  const [dp, setDp] = useState([])

  useEffect(() => {
    // 길이가 n + 1인 배열을 만들고, 모두 0으로 채움
    const arr = Array(n + 1).fill(0);

    // 피보나치 수열 초기값
    arr[0] = 0;
    arr[1] = 1;

    // 이 과정에서 중복 재귀 호출 없이 O(n) 시간에 수열 완성 가능
    for(let i = 2; i <= n; i++) {
      arr[i] = arr[i-2] + arr[i-1];
    }

    setDp(arr);

  }, [n])

  /*
    
  */
  
  return (
    <div>
      <h2>🧠 피보나치 수열 (DP)</h2>
      <label>
        몇 번째 수까지 볼까요?
        <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />
      </label>
      <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
        {dp.map((num, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              width: 30,
              height: num,
              backgroundColor: '#4caf50',
              marginBottom: 4
            }}></div>
            <span>{num}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

