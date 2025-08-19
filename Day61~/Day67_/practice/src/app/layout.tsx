import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang="ko">
      <body>
        <header className="bg-gray-200 p-4">
          <nav className="flex gap-4">
            <Link href="/counter">counter</Link>
            <Link href="/input">input</Link>
            <Link href="/like">like</Link>
            <Link href="/todo">todo</Link>
            <Link href="/toggle">toggle</Link>
          </nav>
        </header>

        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
