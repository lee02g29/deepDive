import "./App.css";

/*
  자바스크립트에서 css, 이미지, 다른 jsx 등 다른 파일을 
  포함하기 위해서는 import를 반드시 해야함

  css 파일을 포함할 때는 '',"" 상관 없음
*/

function App() {

  //자바스크립트에서 사용하던 변수를 이용해서 값을 내용으로 넣을 수 있음.
  let post = "맛집";

  // 색상변수
  let data = "red";

  return (
    /* html에서는 class = 클래스 명
      jsx에서는 className = 클래스 명 */
    <>
      <div className="App">
        <div>
          <h4>블로그</h4>
        </div>

        {/* 자바스크립트에서 변수를 사용해서 값을 태그 안에
        넣을 때, 데이터 바인딩을 아래처럼 사용 */}
        <p>{post}</p>

        {/* 클래스명, href, id, src 등 변수를 넣을 수 있음 */}
        <p className={data}>안녕하세요</p>

        {/* 인라인 요소로 디자인 넣기 
          속성명: '속성 값'
        */}
        <p style={{ color: "blue", fontSize: "3rem" }}>글씨</p>
      </div>
    </>
  );
}

export default App;
// 한줄 주석
/* 여러 줄 주석 */

/* 
  react는 SPA(Single Page Application) 방식의 웹앱
  단 하나의 html 파일만 가지고 모든 페이지와 화면을 렌더링
  자바 스크립트를 통해 모든 UI 컴포넌트를 렌더링하는 방식
  하나의 html + 자바스크립트가 모든 화면을 바꿔주는 방식
*/

/*
  UI(User Interface)
  - 사용자 인터페이스, 사용자와 컴퓨터 프로그램이 서로 상호 작용하기 위해 중간에서 서로 간 입출력을 제어하는 것.
  - 사용자가 무엇을 보고 클릭하고 조작할 수 있게 해주는 화면, 버튼, 입력창 등이  모두 UI.
  - ex) 스마트폰 앱을 열었을 때 보이는 버튼, 글자, 입력창 메뉴바 등 보이는 모든 것
*/

/*
  폴더 구성

  index.html -> 루트 파일(SPA 진입점)
  vite.config.js -> vite의 설정(고급 설정)
  package.json -> 프로젝트 정보, 실행 명령어, 의존성
  node_modules -> 설치된 라이브러리 저장소
  src/ -> 실제 작업 공간
  main.jsx -> 시작점
  app.jsx -> 메인 화면
*/

/*
  리액트 jSX(자바스크립트 XML)
  - 자바스크립트 안에서 html처럼 보이는 문법을 사용할 수 있게 해주는 확장 문법

  컴포넌트
  - 리액트에서 UI를 구성하는 독립적인 단위
  - 웹 화면을 블럭처럼 쪼갠 것
  - 웹 화면을 만드는 부품

  <></>
  - 리액트 프래그먼트(fragment)
  - 여러 컴포넌트를 하나로 묶어주되, 실제 추가적인 DOM을 만들지 않음
  - JSX는 그룹화가 필요함
  -
*/
