import React, { useState } from "react";

export default function Test4() {
  const [arr, setArr] = useState([1, 2, 3, 3, 1, 3, 3, 2, 3, 2]);
  const [result, setResult] = useState(null);

  const obj = {};
  
  obj[42] = "숫자"
  obj[{x : 1}] = "객체"
  obj[function(){}] = "함수"
  console.log("첫번째", obj)

  obj[{y : 2}] = "객체2"

  console.log("두번째", obj)

  console.log(`42 key value: ${obj[42]}`)
  console.log(`{x: 1} key value: ${obj["[object Object]"]}`)

  // ---


  const map = new Map();

  map.set(42, "숫자");
  map.set({x : 1}, "객체")
  map.set(function(){}, "함수")

  // get(key)를 넣어서 값을 가져올 수 있음

  // Map(3) {
  //   42 => "숫자1",
  //   {x : 1} => "객체1",
  //   [function] => '함수',
  // }

  console.log("첫번째 맵", map)
  


  const calculate = () => {
    const count = {};
    // const map = new Map();
    // 기본 제공되는 객체

    for (let num of arr) {
      count[num] = (count[num] || 0) + 1;
      // map.set(num, (count[num] || 0) + 1)
    }

    const fr = Object.values(count);
    // const fr = Array.from(map.values());

    const max = Math.max(...fr);
    const min = Math.min(...fr);

    setResult(Math.floor(max / min));
  };

  return (
    <div>
      <h2>🔢 등장 수 비교 (기본형)</h2>
      <p>배열: {JSON.stringify(arr)}</p>
      <button onClick={calculate}>계산하기</button>
      {result !== null && <p>✅ 결과: {result}</p>}
    </div>
  );
}

/*
  Q
  - 배열에 있는 자연수들 중 가장 많이 등장한 숫자 / 가장 적게 나타난 숫자
  개수를 비교해서 몇 배인지 구하기

  입력값 : 숫자가 담긴 배열, 배열의 길이

  출력값 : 가장 많이 등장한 숫자의 개수 / 가장 적게 나타난 숫자의 개수
  - 소수점 버리기
  
  데이터 라벨
  - 등장 횟수, 최대, 최소, Math.floor

  문제에서 중요한 것
  - 등장 횟수 세기(Map, Object)
  - 최대, 최소값
  - 점수 배수 계산


  Object vs Map

  Object
  - 문자열 또는 심볼만 key로 사용가능
    - 심볼 : 
  
  ex) obj[42] : "숫자" -> 문자열로 자동 변환 "42"
  obj[{x + 1}] = "객체" -> [Object object]
  obj[function(){}] = "함수" -> "fuction(){}"로 변환
  
  Map
  - 숫자, 객체, 함수 등 모든 자료형 key로 사용가능
  - JSON 타입으로 바로 못 바꿈
  - 강력한 장점 : 함수 자체를 key로 저장 가능함

  key로 객체 타입이나 함수를 써야할 때 map
    - react는 컴포넌트 별로 key를 만들고 싶을 때
  입력순서 보장 + 고성능 -> map
  실무에서 안전성 보장하기 위해 사용

  네트워크 통신, api를 사용해야되는 곳에서는
  JSON 변경을 편하게 하기 위해 Object 사용
*/
