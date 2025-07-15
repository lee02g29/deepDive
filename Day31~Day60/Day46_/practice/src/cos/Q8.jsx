import React from "react";

export default function Q8() {
  const n1 = 3;
  const n2 = 2;

  const votes1 = [1, 2, 1, 3, 1, 2, 1];
  const votes1_len = 7;

  const votes2 = [2, 1, 2, 1, 2, 2, 1];
  const votes2_len = 7;

  const calcElection = (n, vote, len) => {
    let sums = new Array(n + 1).fill(0)
    let idx = 0;

    for (let i = 0; i < len; i++) {
      let cur = vote[i];
      sums[cur]++;
    }
    
    for (let i = 1; i < n + 1; i++) {
      console.log(sums[i], sums[idx]);
      if (sums[i] > sums[idx]) {
        idx = i;
      }
    }

    return idx;
  };

  let ans1 = calcElection(n1, votes1, votes1_len)
  let ans2 = calcElection(n2, votes2, votes2_len)

  return (
    <div>
      <h3>Q8. 누가 반장이 될까요?</h3>
      <p> {JSON.stringify(votes1)}</p>
      <p> 당선 : {JSON.stringify(ans1)}</p>
      <p> {JSON.stringify(votes2)}</p>
      <p> 당선 : {JSON.stringify(ans2)}</p>
    </div>
  );
}
