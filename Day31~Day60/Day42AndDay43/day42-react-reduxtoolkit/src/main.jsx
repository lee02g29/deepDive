import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provider: 리액트 앱과 브라우저 RAM에 저장되어있는 자바스크립트 객체와
    연결 */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
