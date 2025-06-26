import React, { useEffect, useRef, useState } from "react";

export default function AutoScrollChat() {
  /*
    채팅창에 채팅을 입력하면 자동으로 스크롤이 이동
    버튼을 클릭했을 때 스크롤이 자동으로 이동
   */

  const endRef = useRef(null);

  // 채팅 메시지 저장. 채팅 메시지를 관리하기 위해서는 useState
  const [msg, setMsg] = useState(["안녕하세요", "환영합니다"]);

  const addMsg = () => {
    // console.log("메시지 추가")

    /*
      prev 변수에는 기존 배열값이 들어옴
      새로운 배열을 만들 때, 기존 배열을 복사하고 새로운 메시지를
      가장 뒤에 추가함
    */
    setMsg((prev) => [...prev, `새 메시지 ${prev.length + 1}`]);
  };

  /*
    메시지가 추가될 때마다(업데이트마다)
    나종으로 채팅창 아래로 스크롤이 내려갈 수 있도록 설정
  */

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: 'smooth',
      block : 'end'
    });
    /*
      옵션을 선택할 수 있음
      옵션을 주지 않고도 사용 가능

      behavior : auto
      block: start 이 기본으로 설정되있어서 즉시 이동이 발생(부드럽지 않음)
      * block 없이 설정해도 무난함
      그렇지만 실무의 추천 조합은 위와 같음
    */
  }, [msg]);

  return (
    <div>
      <h1>AutoScrollChat</h1>
      {/* 스크롤의 위치를 지정. 맨 아래를 참조하는 태그를 만듦 */}
      <div
        style={{
          height: "200px",
          overflowY: "auto",
          // 세로 스크롤 만들기
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {/* 메시지를 출력하는 map */}
        {msg.map((m, i) => (
          <>
            <div key={i} tyle={{ marginBottom: "10px" }}>
              {m}
              {/* 채팅메시지 배열에서 하나씩 꺼내서 m 변수에 저장 */}
            </div>
          </>
        ))}
        <div ref={endRef}></div>
      </div>

      
      <button onClick={addMsg}>메시지 추가</button>
    </div>
  );
}

/*
  1. ref 변수 만들기 태그의 위치를 지정하기
  2. 채팅 메시지는 저장. 채팅메시지를 관리위해서는 useState
  3. 스크롤의 위치를 지정 맨 아래를 참조하는 태그를 만들어서
            ref변수랑 연결하기
  4. 이벤트 추가하기 
  5. 메시지를 출력하는 map
  6. 메시지가 추가될 때 마다( 업데이트)
  자동으로 채팅창 아래로 스크롤이 내려갈 수있도록 설정
*/