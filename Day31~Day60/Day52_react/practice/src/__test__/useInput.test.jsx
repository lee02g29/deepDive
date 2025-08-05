import { beforeEach, describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useInput } from "../hooks/useInput";
import { act } from "react";

describe("useInput 컴포넌트 테스트", () => {
  let result;

  beforeEach(() => {
    ({ result } = renderHook(() => useInput()));
  });

  test("초기 값이 빈 문자열인지 확인", () => {
    expect(result.current.input).toBe("");
  });

  test("input에 텍스트를 입력하기", () => {
    act(() => {
      result.current.handleInput({ target: { value: "react" } });
    });
  });

  test("초기화 클릭시, 데이터 초기화", () => {
    act(() => {
      result.current.handleInput({ target: { value: "test" } });
    });

    act(() => {
      result.current.resetInput()
    });

    expect(result.current.input).toBe("");
  });
});


describe("useInput 컴포넌트 테스트2", () => {
  let result;

  beforeEach(() => {
    ({ result } = renderHook(() => useInput('test')));
  });

  test("초기 값이 초기에 입력한 값이 맞는지 확인", () => {
    expect(result.current.input).toBe("test");
  });

  test("input에 텍스트를 입력하기", () => {
    act(() => {
      result.current.handleInput({ target: { value: "react" } });
    });
  });

  test("초기화 클릭시, 데이터 초기화", () => {
    act(() => {
      result.current.resetInput()
    });

    expect(result.current.input).toBe("");
  });
});