import React from "react";

export default function EventBubbling2() {
  return (
    <div onClickCapture={() => alert("div")}>
      {/* 이벤트 캡쳐링
      - 실행 순서 : 조상 -> 부모 -> 자식
      - 로그 수집기
      - 경고, 방지 기능
      */}
      <section onClick={() => alert("section")}>
        <button onClick={() => alert("button")}>클릭!</button>
      </section>

      {/* 버블링 */}
      {/* <section onClick={() => alert("section")}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert("button");
          }}
        >
          클릭!
        </button>
      </section> */}
    </div>
  );
}
