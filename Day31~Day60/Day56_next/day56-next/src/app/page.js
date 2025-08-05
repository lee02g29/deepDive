import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css"
import Link from "next/link";

/*
  page.js가 main 페이지
  리액트에서의 app.jsx
  next.js -> 버전13 이상부터는 app 디렉토리 기반으로 파일 정리
*/
export default function Home() {

  const name = 'perdy'
  const link = 'https://www.naver.com'

  return (
    <>
      <h1>메인 페이지</h1>
      <p>Hello, Next.js! {name}</p>
      <a href={link}>네이버</a>
    </>
  );
}
/*
  Next.js는 13버전부터는 App Router 기반

  프로젝트 생성 명령어
  - npx create-next-app@latest 프로젝트명
    - 이후 설정을 하나씩 해야함
  - 옵션을 추가해서 설정을 할 수도 있음 
    - 이 경우 \를 사용해서 연결함

  프로젝트 폴더 구성
  - app폴더 - 코드를 작성하는 폴더
  - page.js - 메인 페이지
  - layout.js - 페인 페이지를 감싸는 용도의 페이지
  - public - 이미지나 파일 보관용

  하위 버전에는 api 폴더가 있음
  - 서버 기능을 만드는 곳

  - next.config.mjs - next.js를 설정하는 파일
  - package-json - 설치한 라이브러리 버전 기록용 파일
  - node_modules - 설치한 라이브러리 보관용 폴더


  ---

  Client-Side-Rendering
  - 브라우저에서 html을 실시간으로 만듦

  Server-Side-Rendering
  - 서버에서 미리 html을 만들어서 보냄

  next.js의 장점
  - 폴더 기반의 자동 라우팅
  - DB 연결이 쉬움
  - 캐싱 기능이 좋음
  - 이미지와 폰트 최적화

  vs react
  - react와 동일함
  - 메인 페이지가 다름
  - 클래스명 className , {변수명}

  --- 

  next.js에서 페이지를 나눌 때 사용하는 방법(라우팅)
  - app 폴더 아래의 폴더 이름으로 구분함


  ---

  server Components
  - page.js, layout.js를 만들어서 server Components
  
  장점
  - 페이지 로드시 js가 별로 필요하지 않아서 빠름

  단점
  - html 안에 js를 못넣음
  - useState, useEffect, onClick 등 이런 것들 사용 불가

  client Components

  장점
  - 리액트 훅과 이벤트 핸들러를 사용할 수 있어 동적인 UI 구현이 가능함.
  - 브라우저 전용 기능 사용 가능

  단점
  - 클라이언트에 JS가 포함되므로 초기 로딩 속도가 느려질 수 있음.
  - 렌더링이 클라이언트에서 이뤄지면 검색 엔진이 제대로 크롤링하지 못할 수 있음.

  -> 혼용하는 것을 권장함


*/
