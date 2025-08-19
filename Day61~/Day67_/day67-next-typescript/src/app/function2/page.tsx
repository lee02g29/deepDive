"use client";

export default function functipTest2() {
  function ClickBtn() {
    alert("클릭");
  }

  return (
    <div>
      <h1>이벤트 함수</h1>

      {/* onClick = 클릭했을 때 어떤 행동을 실행 */}
      <button onClick={ClickBtn}>클릭</button>
    </div>
  );
}

/*
  Next.js 13버전 이상 + app router 사이
  - 기본적으로 서버에 동작하는 컴포넌트(조각)
  - 서버에서는 기본적으로 이벤트 사용 x
  - 클라우드 측에서 사용하는 문법이기 때문에, 클라이언트 컴포넌트로 변경해서 사용해야함
  - onclick 이벤트는 'use client'가 필요함
  
  오류 메시지 : use client 없음
  If you need interactivity, consider converting part of this to a Client Component.
 */
