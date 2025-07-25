import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 전체 영역에서 expect, test 사용할 수 있도록 설정
    environment: "jsdom",
    setupFiles: "./src/setup.js",
    // jest-dom 초기 설정 파일
  },
});
