
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
    <nav>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/prod">List</Link>
      <Link className="link"  to="/prod/:id">Detail</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/prod" element={<ProductList />}></Route>
        <Route path="/prod/:id" element={<ProductDetail />}></Route>
      </Routes>

    </>
  )
}

export default App
