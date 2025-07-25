import { beforeEach, describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useToggle } from "../hooks/useToggle";

describe("useToggle 테스트, 초기값 미설정", () => {
  let result;

  beforeEach(() => {
    ({ result } = renderHook(() => useToggle()));
  });

  test("초기값 false 확인", () => {
    expect(result.current.isOpen).toBe(false);
  });

  test("toggle 확인", () => {
    act(() => result.current.toggle());

    expect(result.current.isOpen).toBe(true);
  });

  test("강제 true 확인", () => {
    act(() => result.current.setTrue());

    expect(result.current.isOpen).toBe(true);
  });

  test("강제 false 확인", () => {
    act(() => result.current.setFalse());

    expect(result.current.isOpen).toBe(false);
  });
});


describe("useToggle 테스트, 초기값 true 설정", () => {
  let result;

  beforeEach(() => {
    ({ result } = renderHook(() => useToggle(true)));
  });

  test("초기값 true 확인", () => {
    expect(result.current.isOpen).toBe(true);
  });

  test("toggle 확인", () => {
    act(() => result.current.toggle());

    expect(result.current.isOpen).toBe(false);
  });

  test("강제 true 확인", () => {
    act(() => result.current.setTrue());

    expect(result.current.isOpen).toBe(true);
  });

  test("강제 false 확인", () => {
    act(() => result.current.setFalse());

    expect(result.current.isOpen).toBe(false);
  });
});
