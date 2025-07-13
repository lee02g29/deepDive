import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import TodoInput from "./components/todoInput"
import TodoList from "./components/TodoList"

function App() {


  return (
    <>
      <TodoInput />
      <TodoList />

      <br />
      <br />
      <br />
      
      <PostForm />
      <PostList />
    </>
  )
}

export default App
/*
  Zustand
  - 리액트 앱에서 사용하는 가벼운 전역 상태 관리 라이브러리
  - Redux보다 훨씬 간단하고, Provider 없이 작동하며, Context도 필요없음
  - 전역 상태를 함수 하나로 만들고 어디서든 가져다 쓰는 구조
  - 저장소 하나 만들어서 불러옴

  다른 언어와 확장성(호환성)이 쉬움
  React 성능을 최적화할 때 가장 인기있음
*/