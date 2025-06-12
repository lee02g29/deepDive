import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
/* Class constructor _Button cannot be invoked without 'new'
  import { Button } from 'bootstrap'으로 쓰면 발생함
  자동으로 import 할 때 이쪽으로 하는 경우가 있음
  해결법 : import { Button } from 'react-bootstrap'으로 수정
*/

import "../../App.css";

export default function UseEffectEx1() {
  // 값을 유지하고 화면을 다시 그리는 기능
  const [username, setUserName] = useState("");
  const [board, setBoard] = useState("");

  // 컴포넌트가 나타날 때 실행(mount)
  useEffect(() => {
    console.log("처음 실행됨!");
  }, []);

  // 컴포넌트가 값이 바뀔 때마다 실행(update)
  useEffect(() => {
    console.log("이름이 수정됨!");
  }, [username]); // username이 변경될 때 실행

  // 컴포넌트가 값이 바뀔 때마다 실행(update)
  useEffect(() => {
    console.log("게시글이 추가됨!");
  }, [board]); // username이 변경될 때 실행

  /*
    Q. useEffect 결과가 두 줄 출력이 됨
    -> Strict Mode (엄격 모드) 때문에 발생
    -> Strict Mode가 활성화되면, React는 특정 함수(예: 컴포넌트 렌더링 함수, useEffect의 콜백 함수)를 두 번 호출하여 부작용(side effects)이 발생하지 않는지 확인
    -> 개발 모드에서만 활성화되며, 프로덕션 빌드에는 영향 x
  */

  return (
    <div>
      <Button className="my-button">확인</Button>
    </div>
  );
}

/*
  리액트 부트스트랩
  https://react-bootstrap.netlify.app/ 공식홈
  1. npm install react-bootstrap bootstrap
  2. css 스타일 시트 import
    main.jsx에 포함하기
    import 'bootstrap/dist/css/bootstrap.min.css'
*/

/*
  lifecycle
  - 컴포넌트 언제 생성할 것(mount)
  -          언제 재랜더링 할 것(update)
  -          언제 삭제할 것 (unmount)

  컴포넌트 -- 실행할 코드 -- mount

  한번에 볼 수 있는 useEffect
  실행을 하면 mount & update를 한꺼번에 실행
  콜백함수를 이용해서 내용을 정리

  - 컴포넌트가 화면에 렌더링 된 후 특정 작업을 실행하도록 도와주는 훅
  - 리액트 외부의 일
    (로그인 정보, 간편 결제 영상, 정보 등...)  
  - 어떤 태그가 나타날 때 또는 어떤 값이 바뀌었을 때, 무언가를 요청

*/
