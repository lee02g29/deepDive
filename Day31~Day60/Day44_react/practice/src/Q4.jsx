import React from 'react'

export default function Q4() {

  const classes = [80, 45, 33, 20];
  const classes_len = 4;
  const m = 30;
  let res = 0;

  const calcAssist = (arr, len, m) => {
    let ans = 0;

    arr.map((c) => ans += Math.ceil(c / m))

    return ans;
  }

  res = calcAssist(classes, classes_len, m);

  return (
    <div>
      <h3>Q4. 조교의 수 구하기</h3>
      <p>{JSON.stringify(classes)}</p>
      <p>{res}명</p>
    </div>
  )
}
