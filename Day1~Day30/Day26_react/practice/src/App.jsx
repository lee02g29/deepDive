import { useState } from "react";
import "./App.css";
import MovieChart from "./components/MovieChart";
import MovieDetail from "./components/MovieDetail";
import { Link, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link className="link" to="/">
          무비 차트
        </Link>

        <div className="plan__container">
          <div className="plan__item">현재 상영작</div>
          <div className="plan__item">상영 예정작</div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MovieChart />}>
          무비 차트
        </Route>
        <Route path="/detail/:id" element={<MovieDetail />}>
          영화 정보
        </Route>
      </Routes>
    </>
  );
}

export default App;
