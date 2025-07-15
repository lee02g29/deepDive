import PostForm from "./components/PostForm"
import PostList from "./components/Postlist"

function App() {


  return (
    <>
      <PostForm />
      <PostList />
    </>
  )
}

export default App

/*
  폴더 구조
  app/
  - 리덕스 전체 스토어를 만드는 설정파일

  features/
  - 하나의 기능 단위로 쪼갠 slice를 저장
  - 보통은 폴더별로 나뉨
*/