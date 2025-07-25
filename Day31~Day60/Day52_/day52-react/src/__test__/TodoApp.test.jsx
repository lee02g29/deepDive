import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "../components/TodoApp";
import App from "../App";

describe("TodoApp 통합 테스트", () => {
  test("할 일 추가 및 토글 변경", async () => {
    const user = userEvent.setup();

    render(<TodoApp />);

    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const button = screen.getByText("추가");

    await user.type(input, "테스트 할 일");
    await user.click(button);

    expect(screen.getByText("테스트 할 일")).toBeInTheDocument();

    // 상태 변경(클릭시 취소선)
    await user.click(screen.getByText("테스트 할 일"));
    expect(screen.getByText("테스트 할 일")).toHaveStyle(
      "text-decoration: line-through"
    );
  });

  // useSearchableInput -> app -> todoList로 보내서 출력하는 흐름 테스트
  it('할 일 추가 기능 테스트', async() => {
    render(<App />)
  })
});
/*
  폴더명이 __test__인 이유는 관례적으로 리액트에서 테스트를 폴더로 인싣이 되어있음
  vitest 설정에서 __test__ 폴더를 자동으로 잡음
  파일명.test.jsx(.js) 파일을 자동으로 탐지함

  npm install -D @testing-library/user-event
*/

/*
  Error : Cannot find module '설정파일'
  - setup 파일이 없어서 나는 에러
  해결 방법
    - 설정 파일 확인
    - vite.config.js 확인

  ReferenceError: expect is not defined
  - import가 되어있지 않음
  - 설정 파일에서 globals: true, 해주기


  TypeError
  - map() 부분에서 오류가 발생
  - useState() 에서 초기화하는 부분 확인

  Error: Could not determine window of node. Node was [object HTMLInputElement] 
  - jsdom이랑 userEvent 객체가 제대로 연결이 안되서 에러가 발생했을 수 있음
  - userEvent
    - 실제 사용자 행위를 더 현실감 있게 모방함
    - fireEvent보다 고수준 인터랙션을 제공
    - userEvent 사용 이유
      - 실제 사용자의 동작과 최대하게 유사하게 테스트
      - 복잡한 이벤트 체인 처리
      - 사용성 테스트에 적합
*/
