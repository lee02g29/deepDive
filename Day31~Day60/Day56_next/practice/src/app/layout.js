
export const metadata = {
  title: 'My Next.js 사이트',
  icons: {
    icon: '/my-favicon.ico', // ✅ 직접 등록
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
