import React from "react";
import "../scss/ScssTest4.scss";

export default function ScssTest4() {
  return (
    <div>
      <h3>@if 조건문 예제</h3>
      <div className="box">조건문</div>

      <h3>@for 반복문 예제</h3>
      <div className="box">{[1, 2, 3, 4, 5].map(num => (
        <div key={num} className={`box-${num}`}>
          Box{num}
        </div>
      )
      )}</div>
    </div>
  );
}

/*
  조건 
  @if : 조건에 따라 스타일 다르게 
  @for : 숫자를 반복해서 스타일 생성
  @each : 리스트나 맵을 돌면서 스타일 생성
  @while : 조건이 참인 동안 반복 
  
  반복적인 스타일이나, 조건부 스타일을 작성할 때 유용하게 사용

 */
