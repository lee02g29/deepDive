import React, { useEffect, useState } from "react";

export default function Test6() {
  const [number, setNumber] = useState(40);
  const [clap, setClap] = useState(0);

  const countClaps = (number) => {
    let cnt = 0;

    for (let i = 1; i <= number; i++) {
      let temp = i;

      while (temp > 0) {
        let next = temp % 10;
        temp = Math.floor(temp / 10);

        if (next % 3 === 0 && next !== 0) {
          cnt++;
        }
      }
    }

    return cnt;
  };

  useEffect(() => {
    let result = countClaps(number);
    setClap(result);
  }, []);

  return (
    <div>
      <h3>Test6</h3>
      <p>3,6,9 게임을 {number}까지 하기</p>
      <p>박수 횟수 : {clap} </p>
    </div>
  );
}
