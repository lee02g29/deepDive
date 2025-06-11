import { useState } from "react";

function App() {
  /*
  동작 방식 
  1.  컴포넌트가 렌더링 됨
  
    [0,setIndex]를 반환 리액트는 0을 최신 state값으로 가지고 있음


    2. state 업데이트
    사용자가 버튼을 클릭하면 setIndex()를 호출
    리액트가 index에 1을 기억
  */
  const [index, setIndex] = useState(0);

  /*
    실시간으로 좌표를 업데이트 해서 점을 이동할 수 있는
    transform 사용
  */

  /* 
      오류 : 
      간혹 useState() 자동으로 포함할 때 import 안되는 경우가 있음  
    */


  const [Position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <>
      {/* 마우스를 움직일 때 전체 영역 설정 
        onPointerMove
      */}
      <div
        onPointerMove={(e) => {
          console.log(e.clientX);
          console.log(e.clientY);

          setPosition({ x: e.clientX, y: e.clientY });
        }}
        style={{
          width: "100vw",
          height: "100vh",
          background: "pink",
        }}
      ></div>
      {/* 빨간 점 */}
      <div
        style={{
          position: "absolute",
          background: "red",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          top: 30,
          left: 30,

          // 이동하는 transform
          transform: `translate(${Position.x}px, ${Position.y}px)`,
        }}
      ></div>
      <useObject />
    </>
  );
}

export default App;

/*
  useState처럼 use로 시작되는 다른 모든 함수를 훅(hook)
  이라로 함.

  Hook은 React가 오직 렌더링 중일 때만 사용할 수있는
  특별한 함수.
 */
