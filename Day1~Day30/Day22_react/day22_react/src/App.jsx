import Profile from "./components/Profile";
/*
  전역변수처럼 여러 컴포넌트가 동일한 디자인을 가지고 싶을 경우,
  App 메인화면에서 디자인하는 것이 좋음.
*/
import './App.css'
import ArticleList from "./components/ArticleList";
import Counter from "./components/Counter";


function App() {
  return (
    <>
      {/* <Profile 
        img={""} 
        name={"James Kim"} 
        title='프론트엔드 개발자'
        isNew={true}
        /> */}

        {/* 
          JSX 속성에 자바스크립트의 불리언 값을 전달하고 싶을 때,

          "true" 문자열로 전달하면 타입이 달라지므로,
          의미도 달라질 수 있음.

          따라서, 숫자, 불리언{true, false}, 변수들은 감싸는게 좋음
        */}

        {/* <h1>최신글 모음</h1>
        <ArticleList /> */}

        <Counter />
    </>
  );
}

export default App;

/*
App은 여러 개의 컴포넌트 태그들을 묶어주는 메인화면
main.jsx App만들어진 태그를 root에 넣음


리액트는 기본적으로 클라이언트에서 웹 페이지를 만들어서 보여줌

브라우저에서 리액트 코드가 실행되며, HTML요소를 동적으로 생성해서
화면에 보여줌

처음 index.html파일만 서버에서 다운로드 받고, 이후 화면 구성은 react코드로 처리

렌더링
- 웹 페이지를 화면에 보여줌

리렌더링
- 다시 화면을 만듦

리액트는 매 번 화면 전체를 바꾸지 않음
눈에 보이는 화면을 복사해놓음
바뀌는 부분만 실제 화면에 반영

-> 가상 DOM(Virtual DOM)
- DOM의 복사본을 메모리상에 만듦(자바스크립트 객체 트리)
- Reconciliation 알고리즘으로 특정 key값으로 DOM요소를 추적


리액트에는 컴포넌트를 만드는 방식이 두 가지
1. 함수형 컴포넌트
- 단순히 함수 UI 정의하고, useState, useEffect 같은 Hook로
상태가 생명 주기 기능을 사용가능

2. 클래스형 컴포넌트
- ES6 클래스 문법을 사용하며, 상태 관리 this.state


가상 돔을 이용해서 리액트가 전체화면을 그리지 않으며
새로 고침을 하지 않고, 변경된 부분만 빠르게 수정함
*/
