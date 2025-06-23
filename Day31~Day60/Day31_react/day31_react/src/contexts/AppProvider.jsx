import { createContext, useContext, useState } from "react";
import App from './../App';

// 전체적으로 공유하는 공간
const AppContext = createContext();

function AppProvider({children}) {
  const [user, setUser] = useState("perdy");
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("ko");

  // 공유할 값 구성
  const value = {
    user,
    setUser,
    theme,
    setTheme,
    lang,
    setLang,
  };

  // 공유 값 전달할 Provider로 감싸야함
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>;
  // 자식 컴포넌트들이 context값에 접근할 수 있도록 작성
}

function useAppContext() {
  return useContext(AppContext);
}

// 두 개를 같이 내보내기 할 때 가장 안전한 방식
export {AppProvider, useAppContext};
/*
  Could not fast refresh 에러 발생
  - 이유는 함수형 컴포넌트와 훅이 한 파일에 있으면
  Fast Refresh가 동작을 멈추는 경우가 있음

  해결 방법 -> 두 개를 하나의 객체로 export하거나,
  default export 없이 모두 named export로 변경하는 방법
*/