import React from 'react'

export default function Q5() {
  
  const a = 4;
  const b = 6;
  let ans = 0;

  const calc = (a, b) => {
    return (a * b) / gcd(a, b);
  }
  // LCD * GCD = a * b

  // 유클리드 호제법
  const gcd = (a, b) => {
    if(b == 0) return a;
    else return gcd(b, a % b);
  } 

  ans = calc(a, b);

  return (
    <div>
      <h3>Q5. N일 장이 함께 열리는 날은 언제인가요?</h3>
      <p>{a}일장, {b}일장이 동시에 열리는 날</p>
      <p>{ans}일</p>
    </div>
  )
}
