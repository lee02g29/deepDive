import React from 'react'

export default function Q5() {

  const calories = [713, 665, 873, 500, 751];
  const calories_len = 5
  let ans = 0;

  const calc = (arr, len) => {
    let min = arr[0];
    let health = 0;

    for(let i = 1; i < len; i++) {
      let cur = arr[i];

      if(min > cur) {
        min = cur
      }

      if(min < cur) {
        health += cur - min;
      }

      console.log(cur, min, health)
    }

    return health;
  }

  ans = calc(calories, calories_len);

  return (
    <div>
      <h3>Q5. A씨의 추가 운동 여부 알려주기</h3>
      <p>먹은 열량 : {JSON.stringify(calories)}</p>
      <p>소모 열량 : {ans} Kcal</p>
    </div>
  )
}
