import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CrawlingEx() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .then((res) => {
        console.log(res);
        setMsg(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      CrawlingEx
      <h1>서버랑 연결하기</h1>
      <p>서버 응답 : {msg}</p>
    </div>
  );
}

/*
  Crawling
  - 웹 사이트에서 html 구조를 읽어서 데이터를 자동으로 수집하는 기술
  - 사람의 눈으로 봐야하는 내용을 봇이 대신 읽고 추출함
  

  리액트에서는 크롤링 x
  프론트에서 다른 사이트의 html를 직접 긁어올 수 없음
  보안상의 이유
  Cors 발생

  출처 = 프로토콜 + 도메인 + 포트
  ex) https://localhost:5173 

  웹 브라우저의 기본 보안 정책으로 출처가 다른 웹 사이트끼리는 
  리소스를 공유할 수 없도록 만든 규칙

  Express
  - Node 환경에서 가장 널리 사용되는 백엔드 프레임워크
  - 서버를 빠르고 쉽게 만들 수 있도록 도와주는 웹 프레임워크
  
  리액트 크롤링시 도와주는 라이브러리
  - Puppeteer
  - Cheerio

  개발도구 리액트만 실행
  npm run dev:react

  개발도구 백엔드만 실행
  npm run dev:server

  실행할 때는 먼저 서버 실행하고, 그 후에 리액트를 실행

  문제가 발생(이슈)
  - vite 프로젝트는 모든 파일을 모듈로 인식함
  - require() 사용을 못함

  require() 노드에서 외부 라이브러리를 불러오는 문법(예전)
  -> 이걸 사용하고 싶을 경우에는 package.json 파일에 들어가서
  type이라고 되어있는 부분을 지움
*/
