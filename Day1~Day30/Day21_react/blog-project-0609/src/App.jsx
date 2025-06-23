import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import MyButton from "./components/MyButton";
import Users from "./components/Users";

function App() {
  let names = ["A", "B", "C", "D"];
  // 배열도 자바스크립트 기반이라 사용하는 방법 같음
  /*
    이름 정보를 App이 가지고 있음
    중복되는 코드들이 있기 때문에 해결하기 위해 컴포넌트를 만듦
    app과 컴포넌트들끼리 데이터를 주고 받아야함
    -> props
   */

  let userData = {
    name: "A",
    age: 20,
  };
  return (
    <>
      {/* <Header />
      <h1>App 메인 화면</h1>
      <Footer /> */}

      {/* <h1>안녕하세요. {names[0]}님!</h1> */}
      {/* <Greeting name={names[0]} />
      <Greeting name={names[1]} />
      <Greeting name={names[2]} /> */}

      {/* Greeting 태그가 중복됨
      -> 해결하고 싶을 때 1. map()
      - > 배열을 직접 사용할 때에는 {} 안에 작성
       */}
      {names.map((name, index) => (
        <Greeting name={name} key={index} />
      ))}

      {/* 
      Each child in a list should have a unique "key" prop.
      경고
      - 리랙트에서 배열(map 등)을 이용해서 여러 컴포넌트를 그릴 때가 있음
      - 리액트는 리렌더링 성능에 문제가 생길 수 있음
      - 각 컴포넌트마다 key를 작성해야함
      - 똑같은 태그들을 구별할 수 있도록 key를 넣기
      */}

      <MyButton label="로그인"></MyButton>
      <MyButton label="회원가입"></MyButton>

      {/* userData 변수 생성 
      props는 객체 자체를 한 번에 받을 수 있음
      복잡한 구조의 데이터도 props로 쉽게 받을 수 있음.
      */}

      <Users user={userData} address="경기도 어딘가" />
    </>
  );
}

export default App;

/*
  리액트의 실행 순서
  - index.html 파일 로딩
  - <div id="root"></div> 이 곳에 리액트가 화면을 렌더링
    렌더링?
    - react 컴포넌트를 화면에 그려주는 과정
  - react의 진입점 main.jsx 실행
    - 이때, createRoot() 실행
  - App.jsx 실행
    - 실제 렌더링될 첫 화면을 정의
    - 다른 컴포넌트들을 조합하여 UI를 만듦
  - root에 만들어진 컴포넌트를 보내줌

- npm create vite@latest basic -- --template react
  * npm create vite@latest -> 최신 버전의 vite 도구 실행
  * basic -> 새로 만들 프로젝트 이름
  * -- --template react -> react 템플릿 초기 설정
  * 
  
  npm install / i -> 의존성(명령어 다운 받기)
  npm run dev -> 개발 서버 실행


*/
