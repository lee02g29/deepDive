import Counter from "./components/Counter"
import InputBox from "./components/InputBox"
import UserDisplay from "./components/UserDisplay"
import UserForm from "./components/UserForm"


function App() {


  return (
    <>
      <h1>리액트 테스트</h1>
      <Counter />
      <InputBox />
      <UserForm />
      <UserDisplay />
    </>
  )
}

export default App

/*
  리액트 테스트
  - 리액트 컴포넌트나 기능이 제대로 동작하는지 자동으로 확인해주는 과정
  - 사용자가 버튼을 클릭했을 때, 화면이 바뀌거나 데이터가 저장되는 등의 동작이
    원하는대로 작동하는지 확인해주는 과정
  
    테스트를 하는 이유
    - 사람이 직접 브라우저에서 모든 기능을 직접 확인해보기에는 시간이 오래걸리고, 실수도 많이 발생함
    - 팀 프로젝트나 유지보수가 많은 경우, 코드를 바꾸면 어디가 잘못됐는지 모르고 배포 될 수 있음

  테스트를 자동으로 도와주는 라이브러리
  - RTL(React Testing Library)
    - 리액트에서 표준 테스트 도구로 가장 널리 사용되는 라이브러리
  - JEST
    - 
  - MSW(Mock Service Worker)
    - 가짜 API 응답을 만들어서 테스트를 도와줌
  

  유닛(Unit) 테스트, 통합(Intergration) 테스트, 엔드투엔드(End-to-End, E22) 테스트
    - 유닛 테스트
      - 가장 작은 단위의 로직(함수, 컴포넌트 등)을 독립적으로 테스트
      ex) 버튼 클릭시 1 증가

    - 통합 테스트
      - 여러 유닛이 함께 작동하는 흐름을 테스트(컴포넌트, 상태 관리)
      - 여러 기능이 함께 작동할 때, 연결이 잘 되는지 확인
      ex) 로그인 시 토큰 저장 & 화면 이동

  리액트 유닛 테스트를 위한 필수 외부 라이브러리
  - npm install --save-dev jest @testing-library/react @testing-library/jest-dom
  Jest : Jest 테스트를 실행하는 기본 도구
  @testing-library/react : 리액트 컴포넌트를 테스트할 수 있는 도구
  @testing-library/jest-dom : DOM 요소에 직관적으로 matcher를 추가해주는 유틸리티 라이브러리
    - 유저 관점에서 요소의 상태, 내용, 속성, 클래스, 포커스 여부 등을 테스트 하고 싶을 때
    - expect()
  
  번들러 중에서 vite 프로젝트로 테스트 할 때
  vitest
  - vite 공식 테스트 러너
  - 

  유닛 단위로 테스트를 진행할 때는
  npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom



  vite.config.js 설정
  - test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },

  globals: true
  - test, expect, discribe 같은 전역 함수들을 import 없이 바로 사용할 수 있음
  - false도 되어있다면, 파일마다 import 필요

  environment: 'jsdom',
  - 브라우저에서 시뮬레이션을 할 수 있는 가상 DOM
  - 노드는 document, windows 브라우저 환경이 없기 때문에 jsdom을 이용해서 
  브라우저처럼 테스트하는 환경을 제공
  
  setupFiles: './src/setupTests.js',
  - 테스트가 실행되기 전, 공통으로 설정할 코드를 이곳에 설정


  https://testing-playground.com

*/