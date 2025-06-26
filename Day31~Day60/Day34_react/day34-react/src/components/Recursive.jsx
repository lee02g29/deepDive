import React from "react";
import { useState } from "react";

export default function Recursive() {

  const [total, setTotal] = useState(0);

  function show(count = 0) {
    console.log("show 함수 시작", count);

    if(count >=5) {
      console.log("종료 조건 달성")
      return;
    }
    show(count + 1);
    console.log("show 함수 종료");
  }

  function factorial(num) {
    console.log("호출됨", num)

    if(num == 1) {
      return 1;
    }

    return num * factorial(num - 1);

  }
  /*
    팩토리얼
    - 어떤 자연수 n을 곱함
    - 재귀 함수를 이용해서 반복적 곱셈 구조를 표현함
    - 중요한 것은 종료의 조건을 명확하게 설정하기

    - !
    5! = 5*4*3*2*1
   */

  return (
    <div>
      <button onClick={() => show() }>재귀 함수 시작</button>
      <button onClick={() => setTotal(factorial(5))}>팩토리얼 시작</button>
      {/* 함수로 따로 분리해도 됨 */}

      <h3>팩토리얼 결과</h3>
      <p>{total}</p>
    </div>
  );
}

/*
  재귀 라이브러리
  - react-sortable-tree

  트리 시작화 하는 라이브러리
  - react-d3-tree

  직접 구현하는 경우도 많음

  노드(Node)
  - 데이터(value) + 그 다음 데이터를 가리키는 자식노드(children)
  
  재귀는 자기자신을 불러서 실행함
  call stack에 넣어서 순서대로 함수가 실행될 수 있도록 해줌

  멈추는 조건이 없다면 스택 오버플로우가 발생
*/
