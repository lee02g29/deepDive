import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import StepAge from "./StepAge";
import StepGender from "./StepGender";
import StepName from "./StepName";

export default function SurveyForm() {
  const methods = useForm();

  const onsubmit = (data) => {
    
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)}>
        <StepName />
        <StepAge />
        <StepGender />
      </form>
    </FormProvider>
  );
}

/*
  폼 입력 항목이많거나 단계별로 나뉘는 경우도 많음
  하지만 이때 모든 걸 하나의 파일에 때려 넣으면 유지보수, 테스트, 협업이 어려움
  useFormContext를 사용해 폼을 분할하여, 
  useForm()에서 선언한 상태를 하위 컴포넌트에서도 공유할 수 있도록 한다


  React-Hook-Form에서 여러 컴포넌트 간 폼 상태를 공유할 때 쓰는 도구
  - FormProvider를 통해서 공유한 useForm()의 상태를 하위 컴포넌트들이
    어디서든 가져다가 쓸 수 있게 해주는 훅
  - 하위 컴포넌트로 값을 전달할 때는 props를 이용해서 전달했지만, 
    useFormContext()는 props 없이도 접근 가능하다
  - 중첩된 컴포넌트 구조에서 매우 유용하게 사용가능
*/
