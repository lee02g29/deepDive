import React from "react";

export default function Test3() {
  // 각 달의 일수를 배열로 미리 만듦
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const testCases = {
    start_month: 1,
    start_date: 2,
    end_month: 2,
    end_date: 2,
  };

  /*
    1월 1일부터 주어진 월, 일까지 며칠인지 계산
  */
  const countdays = (month, date) => {
    let total = 0;

    // 앞에 완전히 지나간 달들의 일수 계산
    for (let i = 0; i < month - 1; i++) {
      total += days[i];
    }

    // 이번 달에서 지나간 일 수 더하기 
    total += date;

    console.log(total - 1);

    return total - 1;
  };

  // 3. 실제 차이를 계산하는 함수

  const solution = (sm, sd, em, ed) => {
    let start = countdays(sm, sd);
    let end = countdays(em, ed);

    return end - start;
  };

  return (
    <div>
      <h3>결과</h3>
      <p>
        시작 : {testCases.start_month}월 {testCases.start_date}일 / 종료 :{" "}
        {testCases.end_month}월 {testCases.end_date}일{" "}
      </p>
      <p>{solution(1, 2, 2, 2)}일</p>
    </div>
  );
}
/*
  요약 
  - 시작 날짜(start_month , start_day) 와 끝 날짜 (end_month,end_day)가 주어짐
  - 두 날짜가 며칠 차이인지(D-day) 구하는 문제
  - 윤년은 고려하지 않음

  계산은 총 3단계로 나눠어 처리함
  - 시작일이 1월1일 부터 몇일째인지 계산
  - 종료일이 1월 1일 부터 몇일째 인지 계산
  - 둘의 차이를 구함

  입력값
  - 시작, 끝 날짜
  출력값
  - 시작 날짜와 끝 날짜 간의 날짜 차이

*/
