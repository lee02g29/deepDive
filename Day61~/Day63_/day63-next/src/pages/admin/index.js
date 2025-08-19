import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function AdminDashBoard() {
  const [authorized, setAuthorized] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

    if (!isLoggedIn) {
      // 로그인 페이지로 이동한 후 뒤로가기로 눌렀을 때, 관리자 페이지로 오지 못하게 replace
      router.replace("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, []);

  /* 
    로그인 여부 확인 전에는 화면에 아무 것도 렌더링하지 않음 
    권한 확인 완료 후 대시보드 UI만 보여줌

    서버인증 JWT, 세션 권장

    세션(Session)
    - 웹에서 사용자 로그인 상태를 유지하기 위한 대표적인 방식 중 하나
    - 서버 쪽에 로그인 정보를 저장하고, 브라우저에서 세션을 식별할 수 있는 세션 ID만 쿠키로 전달하는 방식

  */
  if (!authorized) return null;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">관리자 대시보드</h1>
      <ul className="space-y-2">
        <li>
          <a href="/admin/products" className="text-blue-600 underline">
            상품 관리
          </a>
        </li>
        <li>
          <a href="/admin/addproduct" className="text-blue-600 underline">
            상품 추가
          </a>
        </li>
        {/* 08.13 */}
        <li>
          <a href="/admin/orders" className="text-blue-600 underline">
            주문 목록
          </a>
        </li>
        <button
          className="rounded bg-blue-200 p-2 mt-4"
          onClick={() => {
            localStorage.removeItem("adminLoggedIn");
            router.reload();
          }}
        >
          로그아웃
        </button>
      </ul>
    </div>
  );
}

/*
  실무에서 가장 흔하게 사용하는 로그인 유지방법
  1. NextAuth.js(OAuth)
    - pages router -> getServiceSideProps로 보호하는 것이 깔끔함
    
    - axios 안에 create(baseUrl, withCredentials: true);

    - App router -> middleware 쿠키/세션 확인하여 /admin/* 리다이렉트

  2. 서버 세션
  - Redis
  3. JWT(쿠키 저장, refresh 토큰 포함)
  - 서버리스, 모바일-웹 통합 기반

  비밀번호를 넘길때 암호화를 진행
  npm i bcrypt

  쿠키(Cookie)
  - 브라우저가 서버로부터 받아서 로컬에 저장하는 작은 데이터 조각
  - 웹 사이트에서 쿠키를 이용해서 사용자의 상태(로그인 여부, 장바구니 내용 등)을 기억함
  
  HttpOnly
  - 자바스크립트에서 접근 불가(XSS) 방어
*/

/*
  08.14

  데이터 패칭(DataFetching) 
  - 외부 데이터 소스(서버, api, db)로 부터 데이터를 가져우는 과정
  - 필요한 정보를 서버에서 가져오는 것

*/