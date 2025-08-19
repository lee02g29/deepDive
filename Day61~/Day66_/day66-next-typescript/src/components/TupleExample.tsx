import React from "react";

export default function TupleExample() {
  /*
    Tuple 자료형
    - 배열하고 유사하지만, 길이와 각 요소 타입이 고정된 자료형

    array : 요소가 같은 타입만 여러개 들어올 수 있음
    tuple: 요소마다 다른 타입을 순서대로 지정할 수 있음

    튜플을 만드는 방법
    useState = [변수, set변수]
    - 대표적인 튜플 타입으로 사용됨
  */

  // 사용자 정의 타입
  type Response = [boolean, string];

  const student: [string, number, number] = ["perdy", 1, 3];

  const position: [number, number] = [37.5, 127.0];

  // 응답 상태
  const success: Response = [true, "성공"];

  const error: Response = [false, "실패"];

  
  /* 
    배열 데이터를 넣을 때 
    숫자 여러개를 저장할 수 있음
    학생 명단, 상품 목록, 게시판 글 리스트
    길이 유동적, 순서에 의미가 없음

    튜플
    고정된 데이터

    좌표 [위도, 경도]
    RGB [빨강, 녹색, 파랑]
    React useState [값, setter]
  */
  const scores: number[] = [90, 80, 70, 60];

  const tupleScores : [number, number] = [
    90,80
  ]

  return <div>TupleExample</div>;
}
