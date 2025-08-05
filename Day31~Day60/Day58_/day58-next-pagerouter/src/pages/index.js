
/*
  index.js 파일이 메인페이지
  localhost:3000/

  /pages/api 폴더는 API route를 만들 때 사용하는 서버 함수 경로
  ex) /api/hello

  _app.js 모든 페이지에 공통으로 적용되는 layout, 스타일, 상태 관리 들을 설정하는 곳
  
  _document.js HTML, body 태그 등 최상단 구조 커스터마이징(서버사이드 전용)
*/
export default function Home() {
  return (
    <div>
      <h1>페이지 라우터 예제</h1>
    </div>
  );
}

/*
  동적 페이지
  - 사용자에 따라 url이 달라지고, 그에 맞는 내용을 보여주는 페이지
  - 아래 변경되는 url을 변수명으로 받을 수 있음
  - [변수명].js
  
  blog/1
  blog/2
  blog/perdy 
*/