import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

/* 리액트 쿼리를 프로젝트 전체에서 사용할 수 있도록 설정 
  리액트 쿼리는 모든 동작을 한 곳(중앙)에서 관리함
  QueryClient
*/
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* 개발 도구 사용, initialIsOpen : 처음 상태. false : 닫힌 상태로 시작 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
