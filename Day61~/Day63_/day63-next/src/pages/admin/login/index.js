import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";


/* 
  login -> index.js
  자동으로 login 까지가 url 주소가 됨 
*/
export default function AdminLoginPage() {

  /*
    리액트에서 페이지 이동할 때 : next/navigation app router
    page router는 next/router
  */
  const router = useRouter();

  // 입력 상태
  const [form, setForm] = useState({ username: "", password: "" });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/admin/login",form,{
        headers : {"Content-Type": "application/json"}
      });

      // localStorage를 이용해서 로그인 상태 저장
      localStorage.setItem("adminLoggedIn", "true")

      // 페이지 이동
      router.push("/admin")
    } catch(err) {
      const message = "로그인 실패"
      setError(message)
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">관리자 로그인</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          로그인
        </button>
      </form>
    </div>
  );
}


/*
  /router
  router.push("/product") -> 페이지 이동(히스토리에 기록)
  router.replace("/login") -> 페이지 이동(기존 히스토리 대체)
  router.back() -> 뒤로 가기
  router.query() -> url 쿼리 파라미터 가져오기 /post?id=1
  - router.query.id or q

  router.pathname => 현재 페이지 경로
  router.asPath => 쿼리까지 포함한 전체 경로

*/