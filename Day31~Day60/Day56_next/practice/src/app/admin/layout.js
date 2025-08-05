
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <aside>관리자 메뉴</aside>
        {children}
      </body>
    </html>
  );
}
