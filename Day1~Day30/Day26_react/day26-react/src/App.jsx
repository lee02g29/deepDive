import { Route, Routes, useNavigate } from "react-router-dom";
import Mypage from "./pages/Mypage";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import { useEffect } from "react";
import MobvieView from "./pages/MobvieView";

function App() {
  /* 
    페이지를 자동으로 이동하기 위해서 사용하는 것
    1. 컴포넌트 함수의 최상단에서만 호출해야 정상 작동함
    변수 명을 자유롭게 변경할 수 있음 
    ex) go('연결할 경로')
    moveTo('연결할 경로')

    실무에서는 가독성이 떨어지고 협업에 방해가 될 수 있어,
    navigate 사용하기
  */
  // const go = useNavigate();
  // const moveTo = useNavigate();

  // const navigate = useNavigate();

  // 키 값
  // const key = import.meta.env.VITE_API_KEY;

  /*
    Rest 방식
    - http 기반의 기징 널리 사용되는 웹 api
    - json 자바스크립트의 object 처럼 key, value 사용
    - 모두 문자열로 표현됨
    - 프론트엔드에서 가장 많이 사용하는 api 형식
  */

  /* 
    1. 요청하는 문자열 
    url의 핵심 개념
    ? -> url 주소 / ?가 나오기 전까지가 경로
    & -> 연결 고리 변수 여러개를 보내야할 때 사용. 연결할 때 씀
  */
  // const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?${key}&targetId=20241224`;

  function getData() {
    setTimeout(() => {
      return "데이터 도착";
    }, 1000);
  }

  function getDataPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve ("데이터 도착");
      }, 1000);
    });
  }

  // async function goStore() {
  //   console.log("문 열고 들어감");
  //   await wait(2000);
  //   console.log("계산하고 나옴")
  // }

  // function wait(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms))
  // }

  /* 
    api에서 데이터를 받을 때까지 기다려야함
    비동기 처리를 하기 때문에 결과를 받기 전에 콘솔 실행이 일어나서
    undefined가 출력

    이런 문제가 발생하기 때문에 Promise를 이용해서 해결
    - 시간이 걸리는 작업이 끝난 이후 코드를 실행하게 해줌
  */
  useEffect(() => {
    // const result = getData();
    // console.log(result);

    getDataPromise()
    .then((result) => {
      console.log(result);
    })

    /* async, await 
      - async를 쓰면 항상 Promise를 반환
      - 내부에서 await를 사용해서 비동기 흐름을 잠시 동기처럼(순서대로) 처리할 수 있음
    
      await
      - Promise가 완료될 때까지 기다리는 키워드
      - async 안에서만 사용가능
      */

  }, []);

  /*
    실행 순서
    1. useEffect 실행
    2. getDataPromise() 실행
    3. 함수 내부 실행
    4. promise 객체가 생성됨. 데이터가 올 때까지 기다림
    5. 1초 후에 데이터가 오면, 값을 then으로 보냄

  */

  return (
    <>
      {/* 마이페이지 -> 프로필 -> 설정
    상대 경로, 절대 경로 처럼 /mypage 부모 페이지
    /profile를 하는 순간, 부모 페이지를 무시하고 단독 페이지가 됨

    페이지 안에 페이지를 넣어야하는 상황에서는 상대경로를 이용하고,
    부모 페이지가 자동으로 /를 붙여주기 떄문에,
    그 하위 자식 페이지는 경로에 /를 쓰지 않음

    */}
      {/* <Routes>
        <Route path ='/mypage' element={ <Mypage /> } >
          <Route path ='profile' element={ <Profile /> }/>
          <Route path ='settings' element={ <Setting /> }/>
        </Route>

      </Routes> */}

      <MobvieView />
    </>
  );
}

export default App;

/*
  Navigate, nested, Outlet
  복잡한 앱에서 조건부 이동, 중첩 경로 렌더링
  - 관리자 페이지, 대시보드, 로그인 리다이렉트

  Link - 사용자가 클릭해야만 이동
  Navigate - 코드로 자동이동 시킬 수 있음
  Route - 한 화면만 보여줌

  리액트 라우터에서 페이지 이동을 프로그래밍 방식으로 처리하는 함수
  내가 원할 때 코드로 직접 페이지 바꾸기

  뒤로 가기
    - 브라우저의 히스토리 스택을 기준으로 동작
  뒤로  -1  window.history.back()과 같은 역할
  앞으로 1

  ---

  nested routes
  - 리액트에서 중첩해서 설정하는 방식
  - 부모 컴포넌트가 있고 기본 레이아웃도 있을 때,
  그 안에서 자식 라우트가 일부 화면만 교체 해주는 구조

  ex)
  마이 페이지 안에 profile, settings
  부모 - mypage
  자식 - profile, settings

  - 레이아웃 안에 페이지가 들어가는 구조

  ---

  API
  - 시스템이나 프로그램 간의 데이터를 교환하는 인터페이스
  - 다른 프로그램에 정보 요청하고, 결과를 받아오는 통신
  - 프론트엔드가 서버(API)에 정보를 요청
  json
  통신을 할 때, http 상태 코드
  정상 코드 200

  에러코드 
  400, 500
  404 -> 경로 설정 잘못함
  500 -> 서버 내부에 문제가 있음
*/
