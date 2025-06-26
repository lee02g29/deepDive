import React from "react";
import { useReducer } from "react";
// 장바구니에 아이템을 추가 삭제하는 코드

// 1. 처음 시작값을 설정
const cartInitState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];

    case "REMOVE":
      /* 기존 배열에서 삭제할 것만 삭제하고 나머지는 남김
        filter(값, 번호) 배열을 자동으로 돌면서 남길 것만 고름
        값은 쓰지 않으면 _를 주고 무시, index 변수명 변경 가능
        값만 삭제한다면 하나만 주고 써도 됨
      */
      return state.filter((_, index) => index !== action.index);
  }
}

export default function Cart() {
  const [cart, dispatch] = useReducer(cartReducer, cartInitState);

  return (
    <div>
      Cart
      <button onClick={() => dispatch({ type: "ADD", item: "🕶️선글라스" })}>
        선글라스 추가
      </button>
      <button onClick={() => dispatch({ type: "ADD", item: "👓안경" })}>
        안경 추가
      </button>
      <h2>장바구니 목록</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => dispatch({
              type: 'REMOVE', index: i
            })}>제거</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
