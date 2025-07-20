import MultiStepForm from "./components/multistep/MultiStepForm"
import ReactSelect1 from "./components/ReactSelect1"
import ReactSelect2 from "./components/ReactSelect2"


function App() {


  return (
    <>
      <h3>react-select 라이브러리 사용</h3>
      {/* <ReactSelect1 /> */}
      {/* <ReactSelect2 /> */}
      <br />
      <MultiStepForm />
    </>
  )
}

export default App

/*
react-select 라이브러리
  https://react-select.com/home
  - 리액트에서 사용하는 드롭다운, 셀렉트 박스 라이브러리
  - 기본 셀렉트 태그보다는 더 많은 기능을 가지고 있음
  - npm install react-select
*/