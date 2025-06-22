import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import KakaoLogin from './pages/KakaoLogin.jsx'
import KakaoMap1 from './kakakoMap/KakaoMap1.jsx'
import NaverLogin from './pages/NaverLogin.jsx'

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
    path: '/kakao/map',
    element: <KakaoMap1 />
  },
  
  {
    path: '/callback',
    element: <KakaoLogin />
  },
    {
    path: '/naver',
    element: <NaverLogin />
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
