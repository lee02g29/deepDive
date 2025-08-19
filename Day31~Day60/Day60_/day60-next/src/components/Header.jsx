import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between max-w-4xl mx-auto">
        <Link href="/" className="font-bold text-xl">
          MyShop
        </Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/products">Product</Link>
        </div>
      </nav>
    </header>
  );
}

// 공통 메뉴탭을 저장하는 컴포넌트

/*
  Link를 사용하는 이유
  - 클라이언트 사이드 라우팅을 위한 빠른 전환 속도
  - 새로고침 없이 페이지 이동가능
  - a 태그와 달리 자바스크립트 내용을 유지한채로 페이지 이동이 가능
*/
