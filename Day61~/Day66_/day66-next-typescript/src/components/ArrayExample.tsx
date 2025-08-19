import React from "react";

export default function ArrayExample() {
  /* 배열을 사용하는 이유
    - 여러 개의 데이터를 담기 위해 사용함 
    - 문자을 작성할 떄, 타입이 있는 언어들은 문자 한 개와 문자 여러 개를 표현하는 방식이 다름
  */

  let fruits: string[] = ["🍇", "🍎", "🍓"];
  console.log(fruits)

  // 숫자 배열
  let numbers : number[] = [1,2,3,4,5];

  // boolean 타입 배열
  let flags : boolean[] = [true, false, false];

  return (
    <div>
      <h1>타입 스크립트 배열</h1>
      <p>{JSON.stringify(fruits)}</p>
      <p>{JSON.stringify(numbers)}</p>
      <p>{JSON.stringify(flags)}</p>
    </div>
  );
}

/*
  - 파일 생성 후, 내보내기를 하지 않았음
  - export default를 하지 않음
*/