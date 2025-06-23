import React, { useEffect } from 'react'
import "../App.css"

export default function UseEffectEx1() {

  // useEffect(() => {
  //   console.log("useEffect가 처음 실행됨")
  // }, []);
  // 빈 배열을 전달하면, 컴포넌트가 처음 화면에 그려질 때, 한 번만 실행됨

  useEffect(() => {
    const timer = setTimeout(() => {
      alert("마감")
    }, 2000);
  },[])

  return (
    <div className="box">
      2초 후 마감
    </div>
  )
}
/*
  useEffect 
  - 화면이 늦게 뜨거나 버튼을 눌렀을 때 멈추는 것처럼 보일 수 있는
  내용들을 HTML이 먼저 그리고, 그 다음에 부수적인 것들을 처리
  
  ex)
  - 장바구니 페이지 들어갈 때, 서버 내에서 장바구니 데이터 불러오기
  - 컴포넌트 보여지고 나서, 2초 후에 알림 띄우기
  - 주식/코인 차트 불러오기
  -> 화면부터 띄우고 데이터를 뒤에 불러옴


*/

/*
  Toast UI
  Ant Design
  Material UI
*/