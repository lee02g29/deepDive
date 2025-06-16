import { useState } from 'react'
import './App.css'
import MovieChart from './components/MovieChart'
import MovieDetail from './components/MovieDetail'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <nav>
      <Link className="link" to="/">무비 차트</Link>
    </nav>

    <Routes>
      <Route path="/" element={ <MovieChart /> } >무비 차트</Route>
      <Route path="/detail/:id" elements={ <MovieDetail /> } >영화 정조</Route>
    </Routes>
    </>
  )
}

export default App
