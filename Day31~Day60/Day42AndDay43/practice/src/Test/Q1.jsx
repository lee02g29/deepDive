import React from 'react'

export default function Q1() {

  const schedule = ["O", "X", "X", "O", "O", "O", "X", "O", "X", "X"];
  const schedule_len = 10;

  let res = [];

  const notConsult = (arr, len) => {
    const newArr = [];

    for(let i = 0; i < len; i++) {
      if(arr[i] === "X") {
        newArr.push(i + 1);
      }
    }

    return newArr;
  }

  res = notConsult(schedule, schedule_len)

  return (
    <div>
      <h3>Q1. 상담 선생님은 너무 바빠요</h3>
      <p>일정 : {JSON.stringify(schedule)}</p>
      <p>{JSON.stringify(res)}</p>
    </div>
  )
}
