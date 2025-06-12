import React from 'react'

export default function EventDelegationEx() {

  const handleClick = (e) => {
    // e.target : 누가 눌렀는지 확인해 처리하는 방식(이벤트 발생 대상)
    /* if(e.target.tagName === "LI") {
      // 아이템 리스트(LI)를 눌렀는지 확인
      console.log(e.target)
      // 태그 이름 대문자로 나옴
      console.log(e.target.tagName)
    }*/

    const li = e.target.closest("li");
    console.log(li)
    if(li) {
      alert("선택 : " +  li.textContent)
    }
    /* 
      closest(), matches() dataset 사용해서 조금 더 안정적으로
      사용이 가능
    */
  }

  return (
    <div>
      <ul onClick={handleClick}>
        <li>사과</li>
        <li>바나나</li>
        <li>포도</li>
      </ul>
    </div>
  )
}

/*
  이벤트 위임
  - 자식 요소마다 이벤트를 걸지 않고 부모 요소에 이벤트를 한 번만 걸고
  자식의 이벤트를 대신 처리하는 기술
  - 동적으로 추가된 요소들도 처리가 가능하기 때문에 성능과 유지보수에 좋음

*/