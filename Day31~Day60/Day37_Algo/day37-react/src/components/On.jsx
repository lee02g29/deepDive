import React from "react";

export default function On() {
  function friends(arr) {
    // arr.forEach(value => {
    //   console.log(value)
    // });

    // for(let i = 0; i < arr.length; i = i + 1) {
    //   console.log(arr[i]);
    // }

    // for(let value of arr) {
    //   console.log(value)
    // };

    // return arr.map((value, index) => <p key={index}>{value}</p>);
    // // 리액트에서 사용하는 map. 배열에서 하나씩 순회하면서 새로운 배열로 바꿔줌

    // // for랑 while쪽이 약간 빠름
  }

  // friends(['a', 'b', 'c', 'd', 'e'])

  const personList = [
    { name: "철수", age: 12, email: "chulsoo@email.com" },
    { name: "영희", age: 14, email: "younghee@email.com" },
    { name: "민수", age: 11, email: "minsoo@email.com" },
    { name: "수진", age: 13, email: "soojin@email.com" },
    { name: "지훈", age: 15, email: "" },
  ];

  // O(n) 이메일 유효성 감사
  const isValid = personList.filter((user) => user.email.trim() === "");
  console.log("이메일 누락", isValid);

  return (
    <div>
      <h4>O(n)</h4>
      {friends(["a", "b", "c", "d", "e"])}

      {/* 사용자 목록 - 리스트 렌더링 O(n)*/}
      <ul>
        {personList.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age}세 - 이메일: {user.email || "이메일 없음"}
          </li>
        ))}
      </ul>

      {/*       
        || or (또는)
        실행 순서
        1. map에서 꺼내서 친구목록을 가져옴
        2. 각각 li태그로 바꿔서 ul안에 쭉 나열
        3. 이메일이 없다면 || 뒤에 있는 값 사용 */}

      <ul>
        {personList.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age}세 - 이메일: {user.email || "이메일 없음"}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
  O(n)
    - n은 데이터의 개수
    - 입력크기 만큼 반복하는 코드
    - 리스트 렌더링, 검색 필터, 총합 계산 등에서 사용
*/
