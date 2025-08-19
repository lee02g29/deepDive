import React from "react";

export default function ObjectExample() {
  /*
    Object를 사용하는 이유
    - 데이터를 구조화해서 관리하고 여러 개의 값을 하나의 단위로 묶어서 사용하기 위해 사용
    
    Object
    - 안에 들어가는 데이터마다 각각의 이름을 붙이고, 찾기 쉽게 정리하는 타입임
  */

  // 타입에 이름을 붙임
  type Person = {
    id: number;
    name: string;
  };

  type Product = {
    id: number;
    title: string;
    price: number;
  };

  type Student = {
    name: string,
    grade: number,
    class_: number,
    classNumber: number,
  }

  const user: { id: number; name: string } = {
    id: 1,
    name: "perdy",
  };

  const user2: { id: number; name: string } = {
    id: 2,
    name: "perdys",
  };

  // 사용자 설정 타입을 사용한 코드
  const user3: Person = {
    id: 3,
    name: "Escher",
  };

  const item1: Product = {
    id: 101,
    title: "keyboard",
    price: 10000,
  };

  const perdy: Student = {
    name: "perdy",
    grade: 2,
    class_: 3,
    classNumber: 21,
  }

  return (
    <div>
      <h3>타입 스크립트 객체 형식</h3>
      <p>{JSON.stringify(user)}</p>
      <p>{JSON.stringify(user2)}</p>
      <p>{JSON.stringify(perdy)}</p>
    </div>
  );
}

/*
  반복적인 타입선언을 해결하기 위해 type alias를 사용할 수 있음
  만든 타입에 이름을 붙여서 재사용할 수 있음
*/
