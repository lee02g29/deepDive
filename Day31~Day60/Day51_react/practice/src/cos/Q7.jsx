import React from 'react'

export default function Q7() {

  const stuffs = [5,4,3,2,3,2];
  const stuffs_len = 6;
  let ans = 0;

  const calcTime = (arr, len) => {
    let standard = 3;

    let cash1 = 0;
    let cash2 = 0;

    for(let i of arr) {
      if(i > 3) {
        cash2 += i;
      } else {
        cash1 += i
      }
    }

    return Math.max(cash1, cash2)
  }

  ans = calcTime(stuffs, stuffs_len)

  return (
    <div>
      <h3>Q7. 계산 시간을 구해주세요!</h3>
      <p>구매할 물건 수 : {JSON.stringify(stuffs)}</p>
      <p>총 계산 시간 : {ans}</p>
    </div>
  )
}
