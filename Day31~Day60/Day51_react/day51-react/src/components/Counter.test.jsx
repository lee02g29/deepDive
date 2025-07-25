import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Counter from "./Counter";

test('버튼 클릭시, 카운트가 증가해야함', () => {
  // 1. 컴포넌트
  render(<Counter />);

  // 2. 화면에서 '증가'라는 텍스트를 가진 버튼을 찾음. 그리고 변수로 저장
  const button = screen.getByText('증가')

  // 3. 해당 버튼을 클릭하면 동작하는 시뮬레이션
  fireEvent.click(button)

  // 렌더링 된 DOM 구조를 확인하고 싶드면, debug()
  screen.debug();

  // 4. 화면에서 count: 1이라는 텍스트가 보일 것을 기대함(expect)
  expect(screen.getByText('Counter : 1')).toBeInTheDocument();
})

