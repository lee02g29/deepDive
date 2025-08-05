import Counter from "@/components/Counter";
import InputMirror from "@/components/InputMirror";
import ToggleSwitch from "@/components/ToggleSwitch";

// 서버 컴포넌트 예시
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h4>Server Component</h4>
      <p>main 페이지가 첫 번째 Server Component 예제</p>

      <h4>Client Component</h4>
      <Counter />
      <InputMirror />
      <ToggleSwitch />
    </div>
  );
}

/*
  npx create-next-app@latest my-app --ts --eslint --tailwind --src-dir --app --import-alias "@/*"

  ---

  Server Component, Client Component

  Server
  - 서버에서 미리 만든 html 파일을 클라이언트에게 그림파일로만 전송
  - 리액트에서 사용하는 클라이언트 전용 훅들은 사용 불가
  - DB 호출, 비밀키를 이용한 API 호출 등 로직

  Client
  - 브라우저에서 직접 실행되어 버튼 클릭, 입력 감지 등을 담당하는 것
  - 브라우저에서 실행되는 컴포넌트로 상태 관리(useState, useEffect)
  이벤트 핸들러 등을 자유롭게 사용할 수 있음
  - 파일 최상단에 'use clinet' 지시문을 선언해 명시함

  위의 내용을 구별해서 사용하지 않으면?
  - 모든 컴포넌트를 클라이언트에서 렌더링하면, 자바스크립트 번들 크기가 급증함
  -> 초기 로드가 느려짐
  - 서버 사이드에서만 가능했던 작업을 클라이언트 코드로 작성하면 보안이 취약해짐

  실제 개발자 라이브러리
  - tailwindcss 
  - SWR or React Query
  - Zod: 서버 입력 검증

  화면에 보여주기만 하는 것은 서버 컴포넌트, 
  상호 작용을 하고 싶으면(상태관리, 이펙트, 이벤트 등이 필요) -> 클라이언트 컴포넌트


  ----

  면접 질문
  - next.js 흐름(server/client 컴포넌트 개념 분리)
  - sc/cc 차이점
  - server component, 데이타 fetching 할 때, 고려해야할 캐싱 옵션
    캐싱 옵션(cache: 'no-store')

  sc,cc 실행 흐름
    전체 흐름 요약
    단계    설명
    1    사용자 → 서버로 페이지 요청
    2    서버에서 Server Component 실행 & HTML 생성
    3    브라우저에 HTML 전송
    4    브라우저에서 HTML 렌더링
    5    JS 번들 로드 (Client Component용)
    6    Hydration → 사용자 인터랙션 가능
*/