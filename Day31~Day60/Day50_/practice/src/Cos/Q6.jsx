import React from "react";

export default function Q6() {
  const korean = 70;
  const english = 60;

  const korean2 = 30;
  const english2 = 60;

  let ans = 0;
  let ans2 = 0;

  const calcMath = (a, b) => {
    let total = 210 - (a + b);

    if (total > 100) return -1;
    else return total;
  };

  ans = calcMath(korean, english);
  ans2 = calcMath(korean2, english2);

  return (
    <div>
      <h3>Q6. 이제 수학 시험에 모든걸 건다</h3>
      <p>
        국어 점수 : {korean}, 영어 점수 : {english}
      </p>
      <p>받아야 하는 수학 점수: {ans === -1 ? "불가능" : ans + "점"}</p>

      <p>
        국어 점수 : {korean2}, 영어 점수 : {english2}
      </p>
      <p>받아야 하는 수학 점수: {ans2 === -1 ? "불가능" : ans + "점"}</p>
    </div>
  );
}
