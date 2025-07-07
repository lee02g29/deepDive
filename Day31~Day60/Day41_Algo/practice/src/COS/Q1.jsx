import React, { useEffect } from "react";

export default function Q1() {
  let scores = [20, 60, 98, 59];
  let scores_len = 4;
  const num = 3;
  let ans = 0;

  const searchScore = (arr, len) => {
    let studScore = arr[num];
    let sum = 0;
    let newArr = arr.sort((a, b) => b - a);

    console.log(studScore, newArr);
    for (let i = 0; i < len; i++) {
      if (newArr[i] === studScore) {
        sum = i + 1;
        break;
      }
    }

    return sum;
  };

  ans = searchScore(scores, scores_len);

  return (
    <div>
      <h3>Q1. 학생의 등수 구하기</h3>
      <p>{JSON.stringify(scores)}</p>
      <p>{ans}</p>
    </div>
  );
}
