import React from "react";

export default function Test2() {

  const testCases = [
    { price: 2500, grade: "V" }, // 기대: 2125
    { price: 96900, grade: "S" } // 기대: 92055
  ];


  /*
    if & switch문
    비교 조건이 늘어나면 코드가 길어짐
  */
  function solution(price, grade) {
    let rate = 0;

    if(grade === "S") rate = 0.05;
    else if(grade === "G") rate = 0.10;
    else if(grade === "V") rate = 0.15;

    return price - Math.floor(price * rate);
  }

  // 객체 매핑 방식(실무)
  function solution1(price, grade) {
    const discount = {S : 0.95, G: 0.90, V: 0.85};

    return Math.floor(price * discount[grade]);
  }

  return (
    <div>
      <h3>쇼핑몰 등급멸 할인 금액 구하기</h3>
      {
        testCases.map((tc, index) => (
          <div key={index}>
            <p>가격 : {tc.price} / 등급 : {tc.grade}</p>
            <p>최종 가격 : {solution(tc.price, tc.grade)}</p>
            <p>최종 가격 : {solution1(tc.price, tc.grade)}</p>
          </div>
        ))
      }
    </div>
  );
}

/*
  요약
  - 회원 등급에 따라 다른 할인율을 적용
  - S : 5% / G : 10% / V : 15%
  - 주어진 값 : price, grade
  - 출력 : 최종 가격
  - 중요한 데이터 라벨 : 등급별 할인율
 */
