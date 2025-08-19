import { deleteCookie, getCookie, setCookie } from "cookies-next";

export default function Home({token}) {
  
  // const name = "쿠키 이름";
  // const value = "저장할 값"
  // const option = {
  //   object: "선택", // 쿠키 설정 값
  //   maxAge: 60 * 5, // 유효기간 : 초단위
  //   path: "/",
  //   // secure: https 전용
  //   // httpOnly: 서버에서만 접근 가능
  // }

  // // 저장
  // setCookie(name, value, option);

  // // 읽기 : 리턴 값은 문자열 또는 undefined
  // getCookie("가져올 쿠키 이름");
  // getCookie("가져올 쿠키 이름", option);

  // // 삭제
  // deleteCookie("삭제할 쿠키 이름");

  return (
    <div>
      <h1>쿠키(Cookie)</h1>
      <p>저장된 쿠키 토큰 : {token || "없음"}</p>
      {/* 버튼 클릭 -> api 호출 -> 쿠키 저장 -> 새로고침하면 읽어옴 */}
      <button onClick={() => fetch("/api/login")}>쿠키 저장{" "}</button>
      <button onClick={() => fetch("/api/logout")}>쿠키 삭제</button>
    </div>
  );
}

/*
  getServiceSide() :
  - next에서 제공하는 기본적인 서버 사이드 데이터 패칭 함수
  - 페이지 요청이 있을 때마다 서버에서 실행
  - 초기 상태 전달
  - 서버에서 데이터를 미리 받아 html을 완성해서 보냄. 초기 속도 개선에 좋음
*/

export async function getServerSideProps({req, res}) {
  
  // rep 안에 쿠키 중 "adminToken" 값을 꺼내옴. 없으면 null을 넘김
  const token = await getCookie("adminToken", {req, res, path:"/"}) || null;

  return {props: {token}}
}

/*
  쿠키
  - 브라우저와 서버가 데이터를 주고 받을 때, 브라우저에 저장되는 작은 데이터
  - 로그인 세션 유지, 인증 정보 저장, 사용자 설정

  특징
  - 브라우저에 저장
    (사용자가 페이지를 이동하거나 새로고침해도 유지 가능)
  - 자동 전송
    (해당 도메인에 요청을 보낼때마다 브라우저가 함께 전송)

  - 유효 기간(expire / max-age) 설정가능
  - 클라이언트 - 서버 양쪽에서 읽고 쓸 수 있음

  쿠키를 간단하게 다루고 싶을 때 자주 쓰이는 라이브러리
  - npm install cookies-next

  브라우저 환경에서는 httpOnly 옵션은 사용이 불가능
  -> 민감한 토큰은 서버에서 설정

  SSR(Server Side Rendering)
  - 반드시 요청과 응답으로 전달해야 페이지 렌더링시 쿠키 접근 가능

  인증 토큰 저장시 secure : true + https 환경 권장
*/

/*
  페이지가 브라우저에서 열리기 전에, 서버에서 먼저 실행하여, 쿠키나 DB 데이터를 가쟈오는 props로 페이지 컴포넌트 전달
*/

/*
  실행 순서
  1. 페이지 최초 요청시
    localhost:3000 페이지 요청시
    next 서버가 getServiceSideProps()를 먼저 실행
    getServiceSideProps({req, res}) 
    => 현재 쿠키들 중에서 가져올 수 있는 쿠키 값을 찾아서 props 키를 이용해서 쿠키값을 리턴(getCookies())
    Next가 해당 props를 Home 컴포넌트로 전달하여 html을 완성해서 브라우저로 전송
    -> 페이지 로드 시점부터 쿠키 값이 화면에 전달

  2. 브라우저에서 쿠키 저장 버튼을 클릭
    버튼 클릭 : fetch -> 서버로 들어감
    setCookie() 실행 -> 응답 헤더에 set-Cookie 포함
    브라우저가 응답을 받으면서 쿠키를 저장
    (httpOnly가 아니면 JS에서 읽을 수 있음. only면 브라우저 저장만 가능)
    브라우저를 새로고침 하면 1번 과정에서 쿠키 값이 props로 변경
*/

/*
  Module parse failed: Duplicate export 'default' 
  한 자바스립트 파일안에 export default를 두개 쓸 수 없음
  - getServiceSideProps() 쪽의 default를 제거



*/