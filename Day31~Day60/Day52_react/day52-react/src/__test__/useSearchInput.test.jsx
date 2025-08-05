import { beforeEach, describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useSearchableInput } from "../components/todoList/useSearchableInput";


// const로 각각의 훅을 계속 불러오기 때문에 테스트 성능에 부하가 올 수 있음
describe("useSearchableInput 커스텀 훅", () => {

  let result; 

  // 테스트 실행 전에 먼저 실행
  beforeEach(() => {
    ({result} = renderHook(() => useSearchableInput()));
  });

  test("초기 값이 빈 문자열인지 확인", () => {

    expect(result.current.inputValue).toBe("");
    expect(result.current.searchTerm).toBe("");
  });

  test("입력 값을 변경하면 inputValue와 searchTerm이 변경", () => {

    /* 
      renderHook
      훅 안에서 상태를 바꾸는 함수 
      안에 있는 상태값이 ui에 반영되고 테스틀 진행해야함
      그러나, 가끔 테스트를 먼저 진행하면 상태값이 바뀌기 전에 실행되서 에러가 발생하는 경우가 있음
    */
    act(() => {
      result.current.handleInputChange({ target: { value: "react" } });
    });

    expect(result.current.inputValue).toBe("react");
    expect(result.current.searchTerm).toBe("react");
  });

  test("resInput 호출 시, inputValue, searchTerm 초기화", () => {

    act(() => {
      result.current.handleInputChange({ target: { value: "test" } });
    });

    act(() => {
      result.current.resetInput();
    });

    expect(result.current.inputValue).toBe("");
    expect(result.current.searchTerm).toBe("");
  });
});

/*
  BDD
  - 테스트를 사용자의 행위 중심으로 자연어에 가깝게 작성하는 방식
  - 문장의 흐름처럼 사용함
  - vs test()
    - test는 단순히 되는지 확인


  renderHook()
  - 리액트 훅을 테스트할 수 있도록 도와주는 함수
  - 컴포넌트 안에서만 사용하는 훅이기 때문에, 테스트를 진행하면 동작하지 않음
  - 마치 컴포넌트 안에서 훅을 실행하는 것처럼 테스트 할 수 있음
*/
