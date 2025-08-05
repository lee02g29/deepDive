import CommentList from "./features/Comment/CommentList"
import PostInput from "./features/posts/PostInput"
import PostList from "./features/posts/PostList"


function App() {


  return (
    <>
      <PostList /> 
      <PostInput />
      <CommentList />
    </>
  )
}

export default App
/*
  RTX Query는 Redux Toolkit에 포함되어 있으며, API 서버와 통신을 위한 도구
  REST API 또는 GraphQL 서버와 통신을 할 때 데이터를 가져오고 상태를 관리하는 작업을 자동으로 처리함

  사용하는 이유
  - 데이터를 가져오기 위해 axios로 요청
  - 응답 데이터를 저장할 useState
  - API 요청 시기를 결정하는 useEffect
  - 로딩 중 상태, 에러 상태를 직접 구현
  - 전역상태 Redux에 추가
  -> 위의 반복 코드가 너무 많고 유지보수가 힘듦
  -> RTX Query를 이용해서 자동화해줌

  서버와 통신을 하려고 할 때, fetch, axios, RTX Query
  작은 프로젝트 : Axios + useState, useEffect
  규모가 있는 프로젝트 : RTX Query(Redux 연동으로 글로벌 상태 + 서버 상태 통합)

  Redux Toolkit 다운로드
  - npm install @reduxjs/toolkit react-redux
  */