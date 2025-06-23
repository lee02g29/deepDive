import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppEx from './AppEx.jsx'
// 내가 만든 컴포넌트 파일의 경로를 알려줘야함

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppEx />
  </StrictMode>,
)
