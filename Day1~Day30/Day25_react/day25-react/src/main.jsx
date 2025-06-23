import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 여기서 라우터 래핑 
        main에서 해야 코드 구조가 명확하고
        여러 전역설정(context, ThemeProvider)을
        처리하기 깔끔함
    */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);
