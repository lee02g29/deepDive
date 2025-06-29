import IndexTree from "./components/IndexTree"
import { ClassTree } from "./components/IndexData"


function App() {

  return (
    <>
      <h2>수업 목차</h2>
      {
        ClassTree.map((c) => (
          <IndexTree index={c.code} tree={c} />
        ))
      }
    </>
  )
}

export default App
