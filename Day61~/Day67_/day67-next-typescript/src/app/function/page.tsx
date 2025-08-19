import React from "react";

export default function fuctionTest1() {
  function add(a: number, b: number): number {
    return a + b;
  }

  const result = add(10, 5);

  // 옵션을 달아서 name이 있을 수 있고, 없을 수도 있음
  function greet(name? : string) : string{
    return `hello ${name ?? "Guest"}`;
  }

  const hello = greet("hello");

  /*
    함수 -> 입력 -> 처리 -> 출력 구조를 가진 코드 블록
  */

  return (
    <div>
      <h3>타입스크립트 함수</h3>
      <p>10 + 5 = {result}</p>
      <p>함수 입력 -&gt</p>
    </div>
  );
}

/*
  함수
  - 입력(값)을 넣으면 결과가 나옴
*/
