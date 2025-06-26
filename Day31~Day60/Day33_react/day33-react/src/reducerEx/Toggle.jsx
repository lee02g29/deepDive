import React from 'react'
import { useReducer } from 'react'

const toggleInit = false;

/*
  따로 액션 객체가 없어도 가능
  dispatch 단순히 값을 반전만시키기 때문에 action을 사용 x
  action이 undefined으로 오지만 무시됨

  모달열기 / 닫기, 다크모드 켜기 / 끄기, 사이드바 토글 등에 사용
*/
function toggleReducer(state) {
  return !state;
}

export default function Toggle() {

  const [on, dispatch] = useReducer(toggleReducer, toggleInit)

  /*
    boolean 토글을 사용할 때는 굳이 함수를 만들지 않는 경우도 있음
    const [isOpen, toggleModal] = useReducer(state => !state, false);

  */

  return (
    <div>Toggle

      <button onClick={dispatch}>{on ? "켜짐" : "꺼짐"}</button>
    </div>
  )
}
