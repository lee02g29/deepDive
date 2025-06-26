import React from "react";
import { useReducer } from "react";
import { useState } from "react";

export default function WaitList() {
  const listInitial = [];
  const [name, setName] = useState("");

  const handleList = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.name];

      case "REMOVE":
        return state.filter((_, index) => index !== action.index);
    }
  };

  const [list, dispatch] = useReducer(handleList, listInitial);

  const handleName = (e) => {
    e.preventDefault();
    // 새로고침 방지
    if (list.includes(name)) {
      alert("이미 등록된 이름입니다.");
    } else dispatch({ type: "ADD", name: name });
    setName("");
  };

  return (
    <div>
      <h1>대기 리스트</h1>
      <form onSubmit={handleName}>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button type="submit">대기 신청</button>
      </form>

      <h2>대기 인원 : {list.length}명</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE",
                  index: index,
                });
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
