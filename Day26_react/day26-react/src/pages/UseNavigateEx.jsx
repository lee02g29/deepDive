import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// home 컴포넌트
const Home = () => <h2>Home</h2>;

// Dashboard 컴포넌트
const Dashboard = () => <h2>대시보드 페이지</h2>;

export default function UseNavigateEx() {
  const navigate = useNavigate();

  // 로그인 성공 조건
  const loginSuccess = true;

  // handleLogin 이벤트가 실행
  const handleLogin = () => {
    // 코드를 작성해서 조건이 true이면 페이지 이동

    // 조건을 확인
    if (loginSuccess) {
      // 성공시 alert 표시
      alert("로그인 성공 대시보드로 이동");
      // 경로 이동
      navigate("/dashboard");
    }
  };

  return (
    <>
      <h1>Navigate, nested, Outlet</h1>

      <button onClick={() => navigate("/home")}> home </button>
      {/* 버튼 클릭시 */}
      <button onClick={handleLogin}> 로그인 후 이동 </button>

      <button onClick={() => navigate(-1)}> 뒤로가기 </button>

      <Routes>
        <Route path="/" element={<UseNavigateEx />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
