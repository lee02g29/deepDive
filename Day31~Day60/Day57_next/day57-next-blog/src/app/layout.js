import './globals.css'

export const metadata = {
  title: "Welcome to Next.js",
  description: "Get started by editing scr/app/layout.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* 
          metadata는 수동으로 작성할 수도 있음 
          특수한 설정이나, 외부 리소스 링크를 넣을 때 많이 사용함.
          generateMetadata()로 동적으로 SEO  설정 가능
        */}
      </head>
      <body>{children}</body>
    </html>
  );
}

/*
  metadata를 따로 분리하는 이유
  - next.js는 자동으로 title, meta 태그를 자동으로 생성
  - 서버에서 미리 처리
    - 메타 정보는 클라이언트가 아닌 서버에서 미리 렌더링되어 검색엔진 크롤러가 바로 읽을 수 있게 해줌
  - 페이지마다 다르게 지정 가능
    export const metadata = {...} 형식으로 선언해서 next.js가 라우팅에 맞춰 자동으로 적용할 수 있도록 설정
*/