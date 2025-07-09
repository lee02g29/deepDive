import React from "react";

export default function Q2() {
  const standard = [80, 88, 70];

  const scores = [
    [30, 40, 100],
    [97, 88, 95],
  ];
  const scores_len = 2;
  const scores2 = [
    [90, 88, 70],
    [85, 90, 90],
    [100, 100, 70],
    [30, 90, 80],
    [40, 10, 20],
    [83, 98, 80],
  ];
  const scores_len2 = 6;

  let res = 0;
  let res2 = 0;

  const passExam = (arr, arr_len) => {
    let ans = 0;
    let cnt = 0;
    let check = true;

    for (let i = 0; i < arr_len; i++) {
      cnt = 0;
      check = true;

      for (let j = 0; j < 3; j++) {
        if (arr[i][j] >= standard[j]) {
          cnt = cnt + 1;
        } // 기준점 이상인 것 개수 세기

        if (arr[i][j] <= standard[j] / 2) {
          check = false;
        } // 기준점 / 2 이하면 불합격
      }
      
      if (check && cnt >= 1) {
        ans = ans + 1;
      }

      // console.log(i, arr[i], check, cnt, ans)
    }

    return ans;
  };
  // 자바스크립트 reduce함수 : 맵을 돌면서 score에 reduce

  res = passExam(scores, scores_len);
  res2 = passExam(scores2, scores_len2);

  return (
    <div>
      <h3>Q2. 시험 합격자가 몇 명이지?</h3>
      <p>{JSON.stringify(scores)}</p>
      <p>{JSON.stringify(res)}</p>

      <p>{JSON.stringify(scores2)}</p>
      <p>{JSON.stringify(res2)}</p>
    </div>
  );
}
