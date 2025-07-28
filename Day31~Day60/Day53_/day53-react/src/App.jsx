import ScssModuleTest1 from "./components/ScssModuleTest1"
import ScssModuleTest2 from "./components/ScssModuleTest2"
import ScssTest1 from "./components/ScssTest1"
import ScssTest2 from "./components/ScssTest2"
import ScssTest3 from "./components/ScssTest3"
import ScssTest4 from "./components/ScssTest4"


function App() {


  return (
    <>
      <ScssTest1 /> 
      <ScssTest2 />
      <ScssTest3 />
      <ScssModuleTest1 />
      <ScssModuleTest2 />
      <ScssTest4 />
    </>
  )
}

export default App

/*
  SCSS
  - CSS의 확장문법
  - 기존 CSS 문법을 그대로 사용하면서 변수, 중첩, 조건, 반복 믹스인 같은 프로그래밍 적
  기능을 추가할 수 있음
  - 확장자 .scss 확장자를 사용
  - 구조적이고 재사용성이 높은 스타일을 작성할 수 있음

  사용하는 이유
  - css는 대규모 프로젝트에서 반복적 코드가 많아져서 유지 보수가 힘듦
  - scss는 변수, 중첩, 함수 등을 사용해서 더 깔끔하고 유지보수하기가 쉬움

  실무에서 많이 좋아하는 스타일
  - SCSS + CSS Module 방식을 가장 선호
  - Button.module.scss

  SCSS vs SASS

  SASS
  - 확장자 .sass
  - 들여쓰기 기반, 중괄호와 세미콜론 X
  
  리액트에서는 보통 SCSS를 많이 사용
  
  외부 라이브러리 포함
  npm install -D sass

  saas 라이브러리 안에 scss파일을 css로 컴파일하는 도구가 있음

*/