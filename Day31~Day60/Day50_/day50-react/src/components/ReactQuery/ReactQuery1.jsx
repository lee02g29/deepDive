import { useQuery } from "@tanstack/react-query";
import React from "react";

function fetchUser() {
  return fetch(`https://jsonplaceholder.typicode.com/users/1`).then(
    (res) => res.json()
  );
}

export default function ReactQuery1() {

  const {data, isLoading, isError} = useQuery({queryKey: ['user'], queryFn: fetchUser})

  if(isLoading) return <p>로딩 중</p>
  if(isError) return <p>에러 발생</p>

  return <div>
    <h3>유저 정보</h3>
    <p>이름 : {data.name}</p>
    <p>이메일 : {data.email}</p>
  </div>;
}

/*
  npm install @tanstack/react-query
  npm install @tanstack/react-query-devtools

  React-Query 개발 도구
  - 개발 중에 Query 상태를 눈으로 보고 디버깅 할 수 있게 도와주는 도구
  - 개발할 때 유용함

  설치 후 리액트 쿼리와 리액트 파일을 연결하는 Provider 설정
  main, app.jsx(main.jsx 코드에 보통 설정함)
 */


/*
  Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call

  React-Query v5 미만에서든 배열과 함수 형태로 값을 받을 수 있었음
  - const {data, isLoading, isError} = useQuery(['user'], fetchUser)

  v5 이후로부터는 객체 형식으로 사용해야함
  - const {data, isLoading, isError} = useQuery({queryKey: ['user'], queryFn: fetchUser})
  필수
  - queryKey : 고유 아이디로 배열 형태, queryFn : 실제 데이터를 가져오는 함수명
*/