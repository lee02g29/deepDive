import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Hello from "./Hello";

// test('이름/설명', 실제 테스트 코드)
test("hello 컴포넌트가 올바르게 렌더링 되어야 함", () => {
  render(<Hello />); // 컴포넌트 가상 dom에 마운트(mount)하는 함수, 리액트 컴포넌트를 테스트 환경에서 실제 그려주는 함수

  expect(screen
    .getByText("Hello, React + vitest")) // "Hello, React + vitest"를 가진 요소를 찾음
    .toBeInTheDocument(); // 해당 요소가 dom안에 있는지 확인
});
// 화면에 Hello, React + vitest가 화면에 보이면 테스트 성공, 없다면 실패



/*
  package.json에서 "scripts"안에 "test" : "vitest" 추가
  "test" : "vitest" : 터미널 창에서 결과 확인
*/