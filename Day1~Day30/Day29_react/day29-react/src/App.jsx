import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import "./App.css";
import KakaoLogin from "./pages/KakaoLogin";

// 사용자의 정보를 미리 가져오는 컴포넌트
const Profile = () => {
  /* useLoaderData()를 통해서 라우터의 loader 함수에서
  가져온 데이터를 사용할 수 있음 */

  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h1>User Profile</h1>
      <p>{user.name}</p>
    </div>
  );
};

// 라우터 만들기
const router = createBrowserRouter([
  {
    path: "/user/:id",
    element: <Profile />,
    loader: async ({ params }) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );

      if (res.ok) {
        return res.json();
      } else {
        // 에러 처리
        console.error("데이터 로드 실패");
      }
    },
  },
]);

function App() {
  return (
    <>
      <h1>Home Page</h1>
      {/* <Link to='/comments'>링크 이동</Link> */}
      {/* <RouterProvider router={router} />; */}

      <h4>카카오 로그인</h4>
      <KakaoLogin />
    </>
  );
}

export default App;

/*
  최신 리액터 라우터 철학
  - 데이터 중심 라우팅
  React Router 6.4에 도입된 방식.
  데이터 라우터 api 중에 하나로, 컴포넌트 방식이 아니라
  라우트 객체를 선언해서 컴팩트하게 관리할 수 있음

  createBrowserRouter
  브라우저의 히스토리를 기반으로 동작하는 라우터를 생성

  RouterProvider
  - 생성한 createBrowserRouter 라우터를 리액트에서 사용할 수 있도록
  만들어주는 태그

  라우터서 데이터의 로딩 / 제어를 담당하게 만든 것
  loader - 라우팅 시 데이터 미리 불러오기
  라우트가 시작되기 전에 데이터를 먼저 불러오는 방식
  
  action - 라우팅 시 폼 전송 핸들링(폼 제출 처리하기)

  defer - 데이터 일부만 천천히
  - 페이지 진입할 때 모든 데이터를 기다리면 첫 화면이 늦어짐
  따라서, 중요한 거만 먼저 보여주고 나머지는 천천히 가져옴

  예시 코드 )

  // 페이지 컴포넌트
  const Home = () => <h1>Home Page</h1>;
  const About = () => <h1>About</h1>;
  const NotFound = () => <h1>404 - Page Not Found</h1>;

  // 객체 형식으로 브라우저 라우터 생성
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*", // 내가 path로 경로를 설정하지 않은 모돈 url
    element: <NotFound />,
  },
  ]);

  function App() {
    return <RouterProvider router={router}/>
  }
*/
