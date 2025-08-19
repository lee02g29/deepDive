import React from "react";

export default function arrayTest1() {
  let numArr: number[] = [1, 2, 3];
  let setArr: string[] = ["a", "b", "c"];

  /* 
    제네릭
    - <> 안에 타입을 넣어주면, 그 타입으로 여러 개의 데이터를 저장할 수 있음
    - 타입을 변수처럼 받아서 쓸 수 있음
    - 실제로 제네릭 배열을 자주 쓰지 않지만, 함수에서 배열을 다룰때 많이 사용

    toArray() -> 데이터를 넣으면 배열이 생성
    - 숫자를 넣으면 숫자 배열로, 문자를 넣으면 문자 배열로
  */
  let newArr2: Array<number> = [1, 2, 3];
  let strArr2: Array<string> = ["a", "b", "c"];

  // function wrapArray<T>(value: T) : Array<T> {
  //   return [value]
  // }

  // 배열에 들어가는 요소의 타입이 여러가지일 때
  let multiArr: (number | string)[] = [1, "a"];

  // 2차원 배열
  let doubleArr: number[][] = [
    [1, 2, 3],
    [1, 2],
  ];

  // 2차원 배열 출력
  console.log(doubleArr[1][1]);

  // type Cell = "a" | "b" | "c";
  // let board: Cell[][] = Array(8)
  //   .fill(null)
  //   .map(() => Array(8).fill(""));

  return (
    <div>
      <h3></h3>
    </div>
  );
}
