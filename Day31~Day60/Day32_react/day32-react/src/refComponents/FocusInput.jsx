import React, { useEffect, useRef } from "react";

export default function FocusInput() {
  /*
    태그 선택 전
    DOM 참조할 변수를 만듦
  */
  const inputRef = useRef(null);

  // const handledFocus = () => {
  //   /*
  //     예외적인 상황 체크

  //     버튼이 클릭되면
  //   */
    // if (inputRef.current) {
    //     inputRef.current.focus();
    // }
  // };

  /*
    TypeError : Cannot read properties of null(reading 'focus')
    input태그와 useRef가 연결이 안되어있을 때 나타나는 에러
    해결법 - current에 ? 붙이기(옵셔널 체이닝)

    Optional Chaining(?.)
    왼쪽에 있는 데이터가 null이거나 undefined일때 즉시
    값을 반환하고, 그렇지 않으면 ?. 뒤에 있는 내용 실행
  */

  useEffect(() => {
    inputRef.current?.focus();

    /*
      if(inputRef.current != null) {
        inputRef.current.focus();
      }
    */
  }, []);

  return (
    <div>
      <h4>useRef 기본 예제 : 입력창 포커스 자동</h4>

      {/* 원래는 마우스를 클릭해서 입력하는데, 
      클릭 없이도 바로 타이핑을 할 수 있게 도와줌
      - 검색창에 자동으로 포커스
       */}
      <input
        ref={inputRef} // 연결
        type="text"
        placeholder="클릭하여 자동으로 포커스"
      ></input>

      {/* <button onClick={handledFocus}>포커스 이동</button> */}
    </div>
  );
}

/*
  마우스를 클릭했을 때 자동으로 포커스 이동
*/