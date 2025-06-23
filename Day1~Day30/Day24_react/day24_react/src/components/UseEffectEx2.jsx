import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";

export default function UseEffectEx2() {
  const [board, setBoard] = useState([]);

  // 브라우저가 로딩이 될 때 기존 데이터 가져오기

  const firstLoad = useRef(true);
  /* false : 처음은 건너뜀
    true : 처음은 실행함 */

  /*
    useRef()
    - 처음 컴포넌트가 렌더링 될 때만 특정 코드를 실행
    - useEffect안에서 처음인지 아닌지를 추적
    - 컴포넌트가 리렌더링 되더라도, 값이 초기화 되지 않고,
      유지되며 값이 바뀌어도 화면은 리렌더링 하지 않음
  */

  useEffect(() => {
    if (board.length === 0) {
      // if(firstLoad.current) {
      // 가져올 url 확인
      // https://jsonplaceholder.typicode.com/users

      /* react-query  
        - 다운 받아서 패키지에 포함
        - 내부에서 캐싱, 중복 방지, 무한 반복 없이 데이터를 간단하게 관리
        useQuery, useSWR

        npm install @tanstack/react-query
        */
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setBoard(json));

      console.log("타입 : ", typeof board);
      console.log("데이터: ", board);
      firstLoad.current = false; // 처음 한번만 실행
    }
  }, [board]);

  return (
    <div>
      <h1>게시판</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {board.map((user) => {
            console.log(user);
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
          {/* ... */}
        </tbody>
      </Table>
    </div>
  );
}

/*
  useEffect 실행 순서
  - 1. 컴포넌트 처음 렌더링 됨
  - 2. 렌더링이 끝나고 useEffect() 실행
  - 3. 상태(state)나 props가 바뀌면 다시 렌더링
  - 4. 다시 렌더링이 되기 전에 cleanup 함수 먼저 실행
    - 기존에 있는 내용을 정리하고 새로 실행
  - 5. 컴포넌트 사라짐

  Ajax(asynchronous Javascript And XML)
  - 웹페이지를 전체 새로 고침 없이도, 서버와 데이터를 주고 받을 수 있게 해주는 기술
  
  Request : 요청 
  Response: 응답

  XML - HTML처럼 생긴 데이터 전달용
  - 문서처럼 구조를 표현하기 좋음
  - 복잡한 구조를 표현하기 좋음
  - 오래된 시스템과 호환이 좋음
  - 보안성 문서를 처리할 때 좋음

  - 태그가 많아지고 느려짐
  - IOT와 호환이 잘 안됨
  - 파일 용량이 커지게 됨

  JSON
  - 자바스크립트 객체 문법 기반으로 데이터를 보내고 받는 구조
  - Key ,value를 이용해서 주고 받음
  - 가볍고 간단함
  - 현대 웹 개발에서 대부분 표준처럼 사용됨

  프로토콜(규약)
  
  포트번호
  - 하나의 컴퓨터에서 여러 개의 데이터들과 통신을 해야함
    웹, 다운로드(FTP), HTML 통신, DB 통신 등
  - 통신 충돌을 방지하기 위해 포트 번호를 사용

  - XMLHttpRequest

  // 업데이트 될 때마다, 무한 반복으로 실행되는 useEffect 해결 방법
  -> 1. if문으로 한 번만 시키기
  -> 2. useRef 쓰기

  useRef
*/

/*
<thead> cannot be a child of <div>.
<tbody> cannot be a child of <div>.

-> 실제 React에서 올바르게 table을 사용하려면
thead, tbody, table을 잘 선언해야 함.
*/
