import { Link, Routes, Route } from "react-router-dom";
import CosHome from "./cos/CosHome";
import InputHome from "./input/InputHome";
import Info from "./input/Info";
import Depart from "./input/Depart";
import History from './input/History';
import Introduce from "./input/Introduce";
import FinalCheck from "./input/FinalCheck";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "16px" }}>
        <Link className="link" to="/">
          문제 풀이
        </Link>
        <Link className="link" to="/resume">
          지원 폼
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<CosHome />}></Route>
        <Route path="/resume" element={<InputHome />}>
          <Route path="info" element={<Info />} />
          <Route path="depart" element={<Depart />} />
          <Route path="history" element={<History />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="finalCheck" element={<FinalCheck />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
