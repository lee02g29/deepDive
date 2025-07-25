import React from "react";

export default function Q8() {
  const data = [
    { min: 1, max: 20, price: 430 },
    { min: 21, max: 30, price: 570 },
    { min: 31, max: Infinity, price: 840 },
  ];

  const usage = 35;
  let ans = 0;

  const calcFee = (usage) => {
    let fee = 0;

    for (const { min, max, price } of data) {
      if (usage > min) {
        const exceed = Math.min(usage, max);
        const units = exceed - min + 1;
        fee += units * price;
        // console.log(exceed, units, units * price);
      }
    }
    
      return fee;
  };

  ans = calcFee(usage);

  return (
    <div>
      <h3>Q8. 상수도 요금 구하기</h3>
      <p>사용량 : {usage}</p>
      <p>요금 : {ans.toLocaleString('ko-kr')}원</p>
    </div>
  );
}
