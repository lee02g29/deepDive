import TodoApp from "./components/TodoApp"
import TaskInputWithSearch from "./components/todoList/TaskInputWithSearch"

function App() {

  return (
    <>
      <h2>통합 테스트</h2>
      <TodoApp />
      <TaskInputWithSearch />
    </>
  )
}

export default App

/*
  모듈(module)
  - 기능 별로 코드를 분리하여 재사용하고, 유지보수를 쉽게 만들기 위한 파일 조각
  - 모듈 안에는 함수, 리액트 훅, 스타일, 리액트가 제공하는 함수들을 모아서 하나의 파일로 만드는 것을
    it 모듈이라고 함
  
  사용하는 이유
  - 협업에서 유리하도록 코드를 기능별로 나누고 보기 쉽게 수정하기 위해서
  - 필요한 파일만 불러와서 사용할 수 있기 때문에 성능 효율적임
*/

/*
  todoList
  
*/