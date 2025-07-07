import React from "react";
import { typeOf } from "./../../node_modules/uri-js/dist/esnext/util";

export default function Q5() {
  const fees = [
    {
      trans: "Bus",
      adult: 40000,
      child: 15000,
    },
    {
      trans: "Ship",
      adult: 30000,
      child: 13000,
    },
    {
      trans: "Airplane",
      adult: 70000,
      child: 45000,
    },
  ];

  const member_age = [13, 33, 45, 11, 20];
  const member_age_len = 5;
  const transportation = "Bus";
  let ans = 0;

  const member_age2 = [25, 11, 27, 56, 7, 19, 52, 31, 77, 8];
  const member_age_len2 = 10;
  const transportation2 = "Ship";
  let ans2 = 0;

  const calcFee = (age, len, trans) => {
    let sum = 0;
    const adult_rate = len >= 10 ? 0.9 : 1;
    const child_rate = len >= 10 ? 0.8 : 1;
    const newFee = fees.filter((fee) => fee.trans === trans);

    console.log(newFee);

    for (let i = 0; i < len; i++) {
      if (age[i] >= 20) {
        sum += newFee[0].adult * adult_rate;
        // console.log(i, newFee[0].adult  * adult_rate)
      } else {
        sum += newFee[0].child * child_rate;
        // console.log(i, newFee[0].child  * adult_rate)
      }
    }

    return sum;
  };

  ans = calcFee(member_age, member_age_len, transportation);
  ans2 = calcFee(member_age2, member_age_len2, transportation2);

  return (
    <div>
      <h3>Q5. 여행객의 총 교통비 구하기</h3>
      <p>
        {JSON.stringify(member_age)}({transportation})
      </p>
      <p>{ans.toLocaleString("ko-kr")}</p>

      <p>
        {JSON.stringify(member_age2)}({transportation2})
      </p>
      <p>{ans2.toLocaleString("ko-kr")}</p>
    </div>
  );
}
