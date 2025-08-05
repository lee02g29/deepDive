import Link from "next/link";

// 단순히 이미지만 보여주기 때문에 Server Component
export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
        <h1 className="text-4xl font-extrabold text-center">
          Welcome to{" "}
          <a
            className="text-blue-600 hover:underline"
            href="https://nextjs.org/"
          >
            Next.js
          </a>
        </h1>

        <p>
          Get started by editing<code>src/app/page.js</code>
        </p>

        <Link
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Documentation &rarr;</h2>
          <p className="text-base text-gray-600">
            Find in-depth information about Next.js features and API.
          </p>
        </Link>
        <Link
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Learn &rarr;</h2>
          <p className="text-base text-gray-600">
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </Link>

        <Link
          href="https://github.com/vercel/next.js/tree/canary/examples"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Examples &rarr;</h2>
          <p className="text-base text-gray-600">
            Discover and deploy boilerplate example Next.js projects.
          </p>
        </Link>

        <Link
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Deploy &rarr;</h2>
          <p className="text-base text-gray-600">
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </Link>
      </main>
    </div>
  );
}

/*
  page.js = main
  => index.js를 만들 필요가 없음

  리액트 파일을 기준으로 간단히 공백을 넣고 싶을 때 사용하는 jsx 문법
  {' '} : 공백 한칸을 넣기 위해 사용
*/

/*
  <code> 태그
  - 프로그래밍 코드나 명령어 중 고정폭 폰트로 보여줘야할 텍스트를 표시할 때, 사용하는 html 태그
  - 하나의 코드 조각을 표현하고 싶을 때 사용

  a 태그 사용시
  - 전부 새로고침 됨

  link 태그로 바꿔서 사용
  - Client-Side Navigation 때문
  - lin 태그로 사용시 : 브라우저 새로고침이 없이 페이지 간 이동하는 자바스크립트로 처리됨

  target="_blank"
  // 외부 링크일 경우

  vercel : 프론트엔드 중심 app을 쉽고 빠르게 배포할 수 있도록 도와주는 클라우드 플랫폼
  
*/
