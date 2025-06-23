import { useState } from "react";
import ContextTest from "./components/ContextTest";
import UserContext from "./components/UserContext";
import GrandChild from "./components/GrandChild";
import UserContext2 from "./contexts/UserContext2";
import ThemeContext from "./contexts/Theme";
import LangContext from "./contexts/LangContext";
import Dashboard from "./components/Dashboard";
import {AppProvider, useAppContext } from "./contexts/AppProvider";
import NaverLogin from "./NaverTest/NaverLogin";

function App() {
  const [user, setUser] = useState("perdy");

  return (
    // <UserContext.Provider value="perdy">
    //   <h1>useState 지옥</h1>
    //   {/* <ContextTest user={user} /> */}

    //   <h1>useState 문제 해결</h1>
    //   {/* <GrandChild /> */}
    // </UserContext.Provider>

    // <UserContext2 value="perdy">
    //   <ThemeContext value="dark">
    //     <LangContext value="ko">

    //       <Dashboard />

    //     </LangContext>
    //   </ThemeContext>
    // </UserContext2>

    <>
      <AppProvider>
        <Dashboard />
      </AppProvider>
      <h1>로그인하기 </h1>
      <NaverLogin />
    </>
  );
}

export default App;

/*
  Context 컴포넌트가 props로 전달하지 않고도,
  멀리있는 부모 컴포넌트로부터 정보를 받아올 수 있음 

  Context 
  - 리액트에서 여러 컴포넌트가 공유해야하는 데이터를 전역으로
  관리할 수 있는 기능

  실무에서는 여러 Context를 파일로 분리하고 폴더를 구성
  ex) Context/AuthContext.jsx

  너무 많은 값을 Context에 넣으면 전체가 재렌더링됨
  값 분리 + 최적화(useMemo)
  중첩해서 많이 들어감. Redux, Recoil로 대체하기도 함
*/
