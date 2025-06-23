import React from 'react'

export default function EventBubbling1() {

  // const 변수명 = 함수 정의
  // 변수에 함수를 값처럼 넣는 것
  const handlerButtonClick = (e) => {
    e.stopPropagation(); // 부모 팝업 안뜨게 설정
    alert("버튼 클릭");
  }

  const handleParentClick = () => {
    alert("부모")
  }

  return (
    <div onClick={handleParentClick}>
      <button onClick={handlerButtonClick}>클릭</button>
    </div>
  )
}

/*
  이벤트 버블링
  - 어떤 요소에서 이벤트가 발생하면, 그 요소 -> 부모 요소 -> 조상 요소
  순서대로 위로(bubble) 전파되는 현상
  - 리액트도 동일하게 자식-> 부모 -> 조상 순으로 이벤트가 전파됨
  
  - 위 코드들을 실행하면 버튼 클릭 뿐만 아니라, 부모의 팝업까지 실행됨

  */