import Test5 from "./Cos2/Test5"
import Test6 from "./Cos2/Test6"
import HashPassword from "./Hash/HashPassword"
import HashPasswordSHA from "./Hash/HashPasswordSHA"
import HashTest from "./Hash/HashTest"
import HashTest2 from "./Hash/HashTest2"


function App() {


  return (
    <>
      <h3>해시 확인하기</h3>
      <HashTest /> 
      <HashTest2 /> 
      <HashPassword />
      <HashPasswordSHA />
      <Test5 />
      <Test6 />
    </>
  )
}

export default App
