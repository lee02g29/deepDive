"the client";
import React, { useState } from "react";

export default function counter() {
  const [msg, setMsg] = useState<string>("아직 클릭 x");

  /*
    void
    반환 타입에 void를 쓰면, 반환하는 타입이 없음
    매개변수나, 입력값 안에 void를 쓰면 입력하는 값 없음
  */

  function increase() {
    setMsg("증가 클릭");
  }

  return (
    <div>
      <h3>숫자 증가</h3>
      <button onClick={increase}>증가</button>
      <p>{msg}</p>
    </div>
  );
}

/*
  "the client"는 맨 처음에 작성해야함. import문보다도 더 앞쪽에 사용
*/
