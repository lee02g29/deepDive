import { describe } from "vitest";
import { test } from "vitest";
import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect } from "vitest";
import { render } from "@testing-library/react";
import InputEx from "../components/inputEx";

describe("InputEx 통합 테스트", () => {
  test("input 입력 및 값 출력 테스트", async () => {
    const user = userEvent.setup();

    render(<InputEx />);

    const input = screen.getByPlaceholderText("내용을 입력하세요.");

    await user.type(input, "검색어");

    expect(screen.getByText("검색어")).toBeInTheDocument();
  });
  test("input 초기화 테스트", async () => {
    const user = userEvent.setup();

    render(<InputEx />);

    const input = screen.getByPlaceholderText("내용을 입력하세요.");
    const button = screen.getByText("초기화");

    await user.type(input, "검색어");

    expect(screen.getByText("검색어")).toBeInTheDocument();

    await user.click(button);

    expect(input).toHaveValue("");
  });
});
