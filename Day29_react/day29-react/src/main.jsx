import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact, { contactAction } from './assets/pages/Contact.jsx'
import Comments, { commentLoader } from './assets/pages/Comments.jsx'
import KakaoLogin from './assets/pages/KakaoLogin.jsx'

// 라우터 객체 생성
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, 

  {
    path: '/kakao',
    element: <KakaoLogin />
  },
  {
    path: '/callback',
    element: <KakaoLogin />
  },
  /* defer : 데이터를 미리 다 받아오지 않고, 필요한거만 가져옴.
  페이지 렌더링 속도 향상에 유리
  데이터를 가져오기 하는 loader() 안에서 사용
  */
  {
    path: '/comments',
    element: <Comments />,
    loader : commentLoader
  },
  // action : 폼 전송시 자동으로 실행해서 이동하는 설정
  {
    path: '/contact',
    element: <Contact />,
    action: contactAction
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

/*
  main.jsx 파일에서 createBrowserRouter()
  라우팅을 할 때, 중앙 집중식으로 관리할 수 있어서 유지보수에 유리함
  
*/