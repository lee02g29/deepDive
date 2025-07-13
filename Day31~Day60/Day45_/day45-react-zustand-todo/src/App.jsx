import FilterButton from "./components/FilterButton"

function App() {


  return (
    <>
      <FilterButton />
    </>
  )
}

export default App

/*
  요구 사항
  - 할 일을 입력하고 복록에 추가(추후 API 연동)
  - 할 일을 완료 처리하거나 삭제
  - 전체 / 완료 / 미완료 상태 버튼 분류
  - 할일과 필터 상태는 가독성과 재사용을 위해 slice로 분리
  - 필터 상태 Zustand로 관리
*/