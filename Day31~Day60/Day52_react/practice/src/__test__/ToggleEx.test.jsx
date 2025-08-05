import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ToggleEx from "./../components/ToggleEx";
import userEvent from "@testing-library/user-event";

describe("toggleEx 테스트", () => {
  test("toggle 테스트 토글 테스트", async () => {
    const user = userEvent.setup();

    render(<ToggleEx />);

    const toggleButton = screen.getByText("열기/닫기");

    expect(screen.getByText("닫힘")).toBeInTheDocument();

    await user.click(toggleButton);
    expect(screen.getByText("열림")).toBeInTheDocument();

    await user.click(toggleButton);
    expect(screen.getByText("닫힘")).toBeInTheDocument();
  });

  test("toggle 강제 true 테스트", async () => {
    const user = userEvent.setup();

    render(<ToggleEx />);

    const trueButton = screen.getByText("강제로 열기");

    await user.click(trueButton);
    expect(screen.getByText("열림")).toBeInTheDocument();
  });

    test("toggle 강제 false 테스트", async () => {
    const user = userEvent.setup();

    render(<ToggleEx />);

    const falseButton = screen.getByText("강제로 닫기");

    await user.click(falseButton);
    expect(screen.getByText("닫힘")).toBeInTheDocument();
  });
});
