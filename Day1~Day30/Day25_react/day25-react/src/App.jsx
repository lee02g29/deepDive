import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Posts from "./components/pages/Posts"
import "./App.css"
import PostsDetail from "./components/pages/PostsDetail"

Routes

function App() {

  return (
    <>
    {/* url 경로를 설정 
      <Route> 태그를 이용해서 url 경로 설정,
      element 속성을 이용해서 어떤 컴포넌트가 보이게 할지 설정
      
      route - 어디로 가면 어떤 화면을 보여줄지
      routes - 네비게이션
      Link - 문 앞의 표지판

      Link 태그는 페이지 이동을 위한 리액트 전용 버튼
      새로고침 없이 이동
    */}
    <nav>
      {/* 
        리액트의 Link 태그는 html의 a 태그 
        리액트 Link 태그의 to는 href로 변경
      */}
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/posts">Posts</Link>
    </nav>

    {/* 

    */}

      <Routes>
        <Route path="/" element={<Home /> }></Route>
        <Route path="/about" element={<About /> }> </Route>
        <Route path="/posts" element={<Posts /> }> </Route>
        <Route path="/posts/:id" element={<PostsDetail /> }></Route>
      </Routes>
    </>
  )
}

export default App

/*
  React Router
  https://reactrouter.com/
  - react url 경로에 따라 화면을 바꿔주는 라이브러리
  - SPA이기 때문에, 페이지를 새로고침하지 않고 url을 바꿔서
  다양한 컴포넌트를 보여줌
  - react-router-dom : 페이지처럼 보이게 만드는 도구
  - Router 페이지 하나하나를 설정해줌
  - Link 다른 페이지로 이동할 수 있게 도와줌
  - BrowserRouter로 전체 앱을 감싸야 작동함 

  사용하려면 라이브러리를 다운해야함
  - npm install react-router-dom@버전

  url 설정
  1. 라이브러리 다운
  2. BrowserRouter 태그를 main.jsx 파일에 감싸기
  3. 각각의 페이지 컴포넌트 만들기
  4. app.jsx에서 컴포넌트 포함하기

*/ 