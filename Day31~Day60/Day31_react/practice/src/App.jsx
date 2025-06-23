import { ProductProvider, useProductContext } from "../contexts/ProductProvider"
import ProductDetail from "../pages/ProductDetail"

function App() {

  return (
    <>
      <h1>제품</h1>
      <ProductProvider>
        <ProductDetail />
      </ProductProvider>
    </>
  )
}

export default App
