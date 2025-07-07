import React from "react";

export default function Q3() {
  const scores = [35, 28, 98, 34, 20, 50, 85, 74, 71, 7];
  const scores_len = 10;
  let ans = 0;

  const getScores = (arr, len) => {
    const sortedArr = scores.sort((a, b) => a - b);
    const newArr = sortedArr.slice(1, len - 1);
    let sum = 0;
    
    for(let i = 0; i < newArr.length; i++) {
      sum += newArr[i];
    }

    sum = Math.floor(sum / newArr.length);

    return sum;
  }

  ans = getScores(scores, scores_len);

  return <div>
    <h3>Q3. 체조 선수의 점수 구해주기</h3>
    <p>{JSON.stringify(scores)}</p>
    <p>{ans}</p>
  </div>;
}
