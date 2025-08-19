import React from "react";

export default function anyTest() {
  /* 
    Any
    - 타입 스크립트에서 자바스크립트처럼 동작하게 만들어주는 타입 
    - 컴파일러가 타입 체크를 하지 않음
    - 타입 검사를 끄고 자동으로 알아서함
    - 런타임 때 오류 가능성이 높아짐

    실무에서도 가끔 사용을 함
    - 외부 라이브러리 타입 정의가 안됐을 때
    - 임시 코드를 급하게 작성할 때
    - 점진적으로 마이그레이션을 할 때(js -> ts)

    가급적이면 any 보다는 unknown또는 타입을 구체적으로 작성
  */

  const value: any = 123;
  value = "hello";

  /* 
    unknown 변수 
    - 모든 타입을 받을 수는 있지만, 바로 사용할 수 없는 타입
    - 안정성이 약간 향상됨
    - 모든 값을 받을 수 있지만, 사용하기 위해서는 검사가 필요함
  */

  let value2: unknown;
  value2 = 123;
  console.log(value2);

  value2 = "hello";
  console.log(value2);

  // 바로 쓸 수 없음
  // console.log(value2.toUpperCase());

  if (typeof value2 === "string") {
    console.log(value2.toUpperCase());
  }

  let val: unknown = {
    id: 1,
    name: "perdy",
  };

  /*
    - 데이터를 unknown으로 받으면 검사를 해야하는데, 이때 사용하는 연산자 in
    - 확인할 변수명이나 속성값 in 객체명

    typeof -> true, false로 반환
  */

  // object인지 확인 -> null이 아닌지 확인 -> 값이 있는지 확인
  if (typeof val === "object" && val !== null && "name" in val) {
    console.log("object");
  }

  /*
    if("name" in val)
    위 코드처럼 작성하면 null이나, 타입이 올 수 있음
    이 경우 true와 false를 판별할 수 없음
  */
  if ("name" in (val as object)) {
    console.log(val);
    console.log((val as { name: string }).name);
  }

  // 실무에서도 컴파일 타임에서 객체의 속성 이름만 모아서 유니온 타입 작성
  type User = {
    id: number;
    name: string;
  };

  /* 
    keyof : 코드를 작성하는 시점에 이 객체는 어떤 키가 있는지 알려줌
    폼 데이터 검증(사용자가 입력한 key가 올바른지 체크)
    in + keyof를 이용해서 안전성 타입 검사를 함

    ------

    - keyof는 런타임 값이 아닌 타입을 생성할 때 사용
    - 주로 타입 안전한 키 접근, 함수 인자 제한, 제네릭 안전성을 위해 씀
    - 실제 값이 필요하면 런타임에서 Object.keys와 함께 써야 함
  */
  type UserKeys = keyof User;

  // const user: User = { id: 1, name: "Alice" };

  // console.log(Object.keys(user)); // ["id", "name"]

  // const keys = Object.keys(user) as (keyof User)[];
  // console.log(keys); // ["id", "name"]

  return <div>page</div>;
}

/*
  개인용
  - TS 공식적으로는 any 대신 unknown을 권장
  - unknown은 타입 체크가 강제

  any → 타입체커 완전 무시 (자유, 하지만 위험)
  unknown → 안전한 any (받을 땐 자유, 쓸 땐 체크 필요)
*/
