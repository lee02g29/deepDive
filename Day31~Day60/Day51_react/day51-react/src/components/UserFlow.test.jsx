import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import UserForm from "./UserForm";
import UserDisplay from "./UserDisplay";

/*
  describe()
  - 관련된 테스트를 그룹으로 묶어서 테스트하는 함수
  - 테스트 설명 단위, 가독성을 높임
  - 내부 test() 또는 it()등을 포함함
*/
describe("사용자 등록 흐름 통합 테스트", () => {
  test("이름 입력 후 상태가 반영되어야 함", async () => {
    render(
      <>
        <UserForm />
        <UserDisplay />
      </>
    );

    // 1. 이름 입력
    const input = screen.getByPlaceholderText("이름을 입력하세요");

    fireEvent.change(input, { target: { value: "Name" } });

    // 2. 버튼 클릭
    fireEvent.click(screen.getByText("확인"));

    // 3. 상태 반영 기다린 후 확인
    await waitFor(() => {
      expect(screen.getByText("입력한 이름: Name")).toBeInTheDocument();
    });

    // test("이름 입력 후 저장되면 상태에 반영되어야 함", () => {
    //   render(<UserForm />);
    //   fireEvent.change(
    //     screen.getByPlaceholderText("이름을 입력하세요"),

    //     { target: { value: "Name" } }
    //   );

    //   fireEvent.click(screen.getByText("확인"));
    //   expect(useUserStore.getState().name).toBe("Name");
    // });

    // test('입력이 없이 제출하면 아무 일도 발생하지 않음', () => {
    //   render(<UserForm />);
    //   fireEvent.click(screen.getByText("확인"));

    //   expect(useUserStore.getState().name).toBe("");
    // })
  });
});

/*
  expect(값).toBe(기대값) 형태로 사용
  - 두 값이 정확히 값음을 비교(===)
  - 단순 비교(숫자, 문자열, boolean)
  - expect(1 + 1).toBe(2) -> OK
  - expect(true).toBe(true) -> OK

  toBeInTheDocument
  - 화면에 존재하는지 검사
  - Dom 요소가 존재하는지 여부만 확인
  - 실제 화면에 렌더링 된 요소를 확인할 때 사용
  - 이를 사용하기 위해 setUpTests.js에 jest-dom 필요
*/
