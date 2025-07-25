import { expect, test } from "vitest";
import InputBox from "./InputBox";
import { fireEvent, render, screen } from "@testing-library/react";

test('입력한 텍스트가 변경이 되어야 함', () => {
  // 1. 컴포넌트 연결
  render(<InputBox />)

  // 2. 텍스트로 요소 찾기
  const input = screen.getByPlaceholderText('텍스트 입력')

  // 3. input 요소에 'hello'값을 입력하면 시뮬레이션 돌려서 확인
  fireEvent.change(input, {target: {value : 'Hello'}});
  screen.debug();

  // 4. 입력된 결과가 화면에 보이기
  expect(screen.getByText('입력된 값: Hello')).toBeInTheDocument();
})