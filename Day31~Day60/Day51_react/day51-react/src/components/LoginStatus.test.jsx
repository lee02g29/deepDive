import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import LoginStatus from "./LoginStatus";

test('로그인 상태일 때, "로그인 됨" 이라고 보여야 함', () => {
  render(<LoginStatus isLoginedIn={true}/>)

  expect(screen.getByText('로그인 됨')).toBeInTheDocument();
})

test('로그아웃 상태일 때, "로그아웃" 이라고 보여야 함', () => {
  render(<LoginStatus isLoginedIn={false}/>)

  expect(screen.getByText('로그아웃')).toBeInTheDocument();
})