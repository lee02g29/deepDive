import { useReducer } from "react";
import { useState } from "react";
import Counter from "./reducerEx/Counter";
import Toggle from "./reducerEx/Toggle";
import Cart from "./reducerEx/Cart";
import Pagination from "./Pagination/Pagination";

/*
  전역변수
  - 함수 중괄호 밖에 만들어진 변수들
*/
  const initState = {
    name : '',
    email : '',
    age : ''
  };

  function reducer(state,action){
    return {
      ...state,
      [action.field] : action.value
    };
  }

function App() {
  // 데이터를 저장하는 변수
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");

  /* 
  지역변수
    함수 중괄호 안에 만들어진 변수들
  */

  /*
    form은 현재 입력중인 모든 값을 담고 있는 상태 객체
  */
  const [form, dispatch] = useReducer(reducer, initState);
  /*
    reducer는 현재 상태, action은 어떤 값을 바꿔달라는 요청
  */

  /*
    어떤 입력창이든 onChange 이벤트가 팔생하면
    상태를 업데이트하는 함수
    dispatch 해당 필드를 업데이트 하도록 액션을 전달
  */
  const handleChange = (e) => {
    dispatch({
        field : e.target.name,  // 태그 구별하는 name속성
        value : e.target.value  // 실제 사용자가 입력한 값
      })
    console.log("이벤트 발생 태그 : ", e.teraget.name);
  }

  return (
    <>
      {/* <h1>useState를 사용했을 때 불편함</h1>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="나이"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      /> */}

      {/* 단점 : useState가 3개 필요함
        onChange. 함수도 각 필드마다 따로 처리함
        상태가 많아질수록 코드도 길어짐
      */}

      <h1>useReducer</h1>

      <input
        name="name"
        type="text"
        placeholder="이름"
        onChange={handleChange}
      />
      <input
        name="email"
        type="text"
        placeholder="이메일"
        onChange={handleChange}
      />
      <input
        name="age"
        type="text"
        placeholder="나이"
        onChange={handleChange}
      /> 

      {/* <Counter />
      <Toggle />
      <Cart /> */}
      <Pagination />
    </>
  );
}

export default App;
/*
  useReducer
  - 상태를 업데이트하는 로직이 복잡하거나, 상태값이 많고 그 값들 같의
  관계가 있을 때 사용하는 리액트 훅

  - 로그인, 회원가입 폼 등에서 여러 필드를 관리해야할 때 사용
  - 장바구니 로직
  - todo, 게임 로직

  vs state
  state : 간단한 값 하나 바꿀 때 사용
  reducer : 상태 변경 조건이 많을 때 사용

*/
