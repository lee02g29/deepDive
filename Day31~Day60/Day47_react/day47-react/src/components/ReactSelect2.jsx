import React from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";

const options = [
  { value: "초콜릿", label: "초콜릿" },
  { value: "다크초콜릿", label: "다크초콜릿" },
  { value: "밀크초콜릿", label: "밀크초콜릿" },
];

export default function ReactSelect2() {
  /*
    useForm에서 control 객체 가져오기
  */

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("제출된 폼 데이터 :", JSON.stringify(data,null,2));
  };

  return (
    <div>
      <h3>외부 라이브러리 연결시 Controller 사용</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller // 데이터를 사용하는 UI 컴포넌트
          name="chocolate"
          control={control} // 외부 컴포넌트와의 연결자 역할(데이터)
          render={({field}) => ( // 필드를 어떻게 그릴지 정하는 함수
            /* ...field : 핵심 동작
              value -> 현재 값
              onChange -> 선택된 값이 바뀔 때 저장
              ref => 폼 내부에서 이 요소를 추적
            */
            <Select
            {...field}
              options={options}
              placeholder="초콜릿 맛을 선택하세요"
              isClearable // x버튼
            />
          )}
        ></Controller>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
/*
  control - 폼 상태를 추적함(외부 컴포넌트 연결 준비)
  Controller 외부 UI를 연결해주는 연결자(어떤 UI를 보여줄지 결정)
  select {...field} 연결을 사용하는 사용자 인터페이스 (정보가 작동하게 만듦)

  ...field -> value,onChange,ref 등을 한번에 전달

  실행 순서
  사용자가 드롭다운 선택 -> 상태 변경(onChange)
  제출버튼을 클릭 -> handleSubmit 호출
  통과하면 onSubmit 함수 실행
  폼 데이터 출력 or 저장
*/
