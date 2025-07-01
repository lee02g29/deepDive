import React from "react";

export default function On2() {
  function loop() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        console.log("내부 반복");
      }
      console.log("외부 반복");
    }
  }

  const users = ["a", "b", "c", "d", "e"];
  const friendPairs = [];

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length; j++)
      if (i !== j) {
        friendPairs.push(`${users[i]} - ${users[j]}`);
      }
  }

  /* flatMap()
  - 플랫하게 만든 후 매핑
  - 배열 안에 배열이 들어있는 걸 한줄로 펼쳐줌
  */

  const arr = [
    [1, 2],
    [2, 3],
    [4, 5],
  ];
  console.log(arr.flat);
  [1, 2, 3].map((x) => [x, x * 2]);

  const friendPairs2 = users.flatMap((ul, i) =>
    users.slice(i + 1).map((u2) => `${ul} - ${u2}`)
  );

  return (
    <div>
      <h4>On2</h4>
      <h5>0모든 사용자 간 친구 관계 검사</h5>
      <ul>
        {friendPairs.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>

      <p>총 비교한 횟수: {friendPairs.length}번</p>
      <p>(n = {users.length} - n x (n - 1))</p>

      <h4>flatMap</h4>
      <ul>
        {friendPairs2.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
}

/*
  O(n^2)
  - 중첩 반복문
  - 이중 반복
  - n = 10 -> 100번 실행

  - ex) 모든 사용자에게 서로 친구인지 확인
    - 사용자 리스트가 있으면, 각각 다른 모든 사람들과 친구인지 확인
    - 이중 반복 O^2
  
  n x(n - 1)
  - 외부 루프는 여러 번 돌고, 내부 루프는 각 항목을 제외한 나머지
*/
