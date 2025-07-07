import React, { useEffect, useState } from "react";
import App from './../../../Day39_Algo/practice/src/App';

export default function Lcs() {

  // 두 문자열에서 순서를 지키며, 가장 길게 켭치는 부분을 찾음

  // 비교할 두 문자열
  const [strA, setStrA] = useState("ABCBDAB");
  const [strB, setStrB] = useState("BDAB");

  // 계산된 결과를 2차원 DSP테이블에 저장해서 상태 관리
  const [lcsLength, setLcsLength] = useState(0);
  const [dpTable, setDpTable] = useState([]);

  // 실제 계산하는 함수
  /* Array.from()
    - 배열을 만들고 싶을 때 사용
    - 보통 길이만 있는 객체를 기준으로 만들고 두번째 인자에 콜백함수
  */
  const calculateLCS = (a, b) => {
    const dp = Array.from({length: a.length + 1}, () =>
    Array(b.length + 1).fill(0));


    for(let i = 1; i <= a.length; i++) {
      for(let j = 1; j <= b.length; j++) {
        if(a[i - 1] === b[j - 1]) {
          dp[i][j] = dp[i-1][j-1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
      }
      setLcsLength(dp[a.length][b.length]);
      setDpTable(dp)
    }
  }

  useEffect(() => {
    calculateLCS(strA, strB)
  }, [strA, strB])

  return (
    <div>
      <h2>🧬 LCS (Longest Common Subsequence)</h2>

      <div style={{ marginBottom: 10 }}>
        <label>
          문자열 A:
          <input value={strA} onChange={(e) => setStrA(e.target.value)} />
        </label>
        <label style={{ marginLeft: 20 }}>
          문자열 B:
          <input value={strB} onChange={(e) => setStrB(e.target.value)} />
        </label>
      </div>

      <p>
        🔍 가장 긴 공통 부분 수열의 길이: <strong>{lcsLength}</strong>
      </p>

      <h4>🧾 DP 테이블 시각화</h4>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            {strB.split("").map((char, j) => (
              <th key={j}>{char}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dpTable.map((row, i) => (
            <tr key={i}>
              <th>{i === 0 ? "" : strA[i - 1]}</th>
              {row.map((val, j) => (
                <td
                  key={j}
                  style={{ backgroundColor: val > 0 ? "#e0f7fa" : "#f0f0f0" }}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*
a = A B C B D A B
b = B D C A B

  0 1 2 3 4 5  (b의 인덱스 j)
  -------------
0|0 0 0 0 0 0
1|0 0 0 0 1 1   ← a[0]=A, b[3]=A → dp[1][4] = dp[0][3]+1
2|0 1 1 1 1 2   ← a[1]=B, b[0]=B → dp[2][1] = dp[1][0]+1
3|0 1 1 2 2 2
4|0 1 1 2 2 3
5|0 1 2 2 2 3
6|0 1 2 2 3 3
7|0 1 2 2 3 4   ← 최종 LCS 길이 = 4

dp[i][j] = a[0 ~ i - 1]와 b[0 ~ j - 1]까지의 길이


테이블을 채우는 방법
1. 글자가 같으면 + 1
2. 글자가 다르면 -> 둘 중 큰 값을 가져옴

0번째들은 문자열 중 하나가 길이 0이면 공통 부분 수열은 존재할 수 없기 때문에,
dp[0][*], dp[*][0]은 항상 0으로 정해져 있음.

또한, i = 0, j = 0부터 시작하면
-1 인덱스 접근을 피하려고 if문 추가해야 하고, 코드가 복잡해짐
*/