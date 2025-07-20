import DebounceTest from "./components/DebounceTest"
import LodashTest from './components/lodashTest/LodashTest';
import LodashTest2 from "./components/lodashTest/LodashTest2";
import LodashTest3 from "./components/lodashTest/LodashTest3";
import ThrottlingTest from './components/throttlingTest/ThrottlingTest';
import UseCallBackTest from './components/throttlingTest/UseCallBackTest';
import DebounceSol from './components/DebounceSol';


function App() {


  return (
    <>
      <h3>Debounce가 없는 예제</h3>
      {/* <DebounceTest /> */}
      <DebounceSol />
      {/* <LodashTest /> 
      <LodashTest2 />
      <LodashTest3 /> */}
      {/* <ThrottlingTest />
      <UseCallBackTest /> */}
    </>
  )
}

export default App

/*
  Debounce
  - 사용자가 입력을 멈춘 후 일정 시간 뒤에만 함수를 실행하는 기법
  - 이벤트가 여러 번 발생해도 마지막 이벤트만 유효하게 처리
  - 많이 사용하는 곳 : 검색창 자동완성, 입력 창 유효성 검사 등에서 사용
  - onChange, onKeyUp, onInput 등의 이벤트에서 사용자가 입력을 마치고 기다렸다가 처리하고 싶을 때 사용

  Throttle
  - 사용자가 어떤 행동을 연속적으로 해도, 일정 시간 간격으로만 함수 실행이
  일어나도록 제한하는 기법
  - 이벤트가 자주 발생하더라도 주기적으로 1회만 처리

  사용하게 된 이유
  - 브라우저에서 발생하는 이벤트가 매우 빈번함
  - 사용자가 검색창에 글자를 입력함 - input
  - 스크롤할 때 scroll
  - 창 크기를 바꿀 때 - resize
  - API 요청, 렌더링이 계속 붙어서 성능 저하 및 UX 저하가 발생
*/