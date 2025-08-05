import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {/* 네비게이션 바 */}
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/about">about</Link>
        </div>
        {children}
      </body>
    </html>
  );
}

/*  
  layout.js
  - page.js의 외부 구조를 감쌈
  - {children} 부분에 실제 페이지 컴포넌트가 들어감
    - page.js가 이쪽에서 렌더링이 됨
  - 공통 레이아웃(header, footer, sidebar) 등을 작성
*/