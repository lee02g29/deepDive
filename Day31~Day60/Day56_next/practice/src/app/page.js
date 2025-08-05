import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h3>페인 페이지</h3>
      <a href="/brochure.pdf" download>
        브로셔 다운로드
      </a>
      <Image src="/logo.png" alt="로고" width="200" height="200"/>
    </div>
  );
}
