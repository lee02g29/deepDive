import React from 'react'

export default function Q7() {

  const mid_scores = [20, 50, 40];
  const mid_scores_len = 3;
  const final_scores = [10, 50, 70];
  const final_scores_len = 3;

  let ans = [];

  const calcScore = (midarr, finalarr) => {
    let newArr = [];
    let min = 101;
    let max = -101;

    newArr = calcScoreGap(midarr, finalarr);

    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i] < 0 && newArr[i] < min) {
        min = newArr[i];
      }

      if(newArr[i] > 0 && newArr[i] > max) {
        max = newArr[i];
      }
    } 

    return [max, min]
  }

  const calcScoreGap = (arr1, arr2) => {

    let newArr = []

    for(let i = 0; i < arr1.length; i++) {
      newArr = [...newArr, arr2[i] - arr1[i]];
    } 

    return newArr;
  }

  ans = calcScore(mid_scores, final_scores)

  return (
    <div>
      <h3>Q7. 오른 점수와 떨어진 점수 구하기</h3>
      <p>중간 고사 점수 : {JSON.stringify(mid_scores)}</p>
      <p>기말 고사 점수 : {JSON.stringify(final_scores)}</p>
      <p>{JSON.stringify(ans)}</p>
    </div>
  )
}
