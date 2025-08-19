import React from 'react'

export default function objectTest1() {

  type Student = {
    name: string;
    gender: string;
  }
  // ? 없이 타입을 선언하면, 그 안에 있는 변수의 값들을 모두 받아와야함
  let s1: Student = {name: "stud", gender: "gender"};

  // 객체 리터럴 타입
  type Person = {
    name: string;
    age? : number, // ?가 붙은 속성
  }

  let p1 = {name: "pers"};
  // age (number | undefined)

  // object 타입
  let stud: object = {name: "pers", grade: 4};

  console.log(stud)
  // 오류 : object는 name이라는 속성이 있는지 모름
  // console.log(stud.name)

  let obj: object;
  obj = () => console.log('hi');

  return (
    <div>
      <h3>Object 타입에 ?</h3>
    </div>
  )
}

/*
  ? 옵션 속성
  - 있어도 되고, 없어도 되는 속성
  - API 응답, 데이터 모델링을 할 때 좋음

  단점
  - 타입이 사실상 타입 | undefined라서 사용할 때 체크 필요
  - 

  객체 타입은 지정할 때, 크게 두 가지로 나뉨

  object 타입
  - 단순히 이 변수는 객체임을 알려주는 타입
  - 실무에서 object는 애매모호하고, 속성이 지정이 안되기 때문에 잘 사용하지 않으며, 
  객체 리터럴 타입으로 구조를 명확하게 잡는 것이 좋음

  객체 리터럴 타입
  
*/