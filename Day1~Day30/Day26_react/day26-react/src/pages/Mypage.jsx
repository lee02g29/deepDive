import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Mypage() {
  return (
    <div>
      <h1>Mypage</h1>
      <nav>
        <Link to = 'profile'>프로필</Link><br></br>
        <Link to = 'setting'>설정</Link>
      </nav>

      <hr />
      <Outlet /> 
      {/* 
        자식 페이지가 보일 수 있도록 위치를 지정 
        꼭 있어야함 
      */}
    </div>
  );
}
