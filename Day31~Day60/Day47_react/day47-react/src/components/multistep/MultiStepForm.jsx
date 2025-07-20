import React from "react";

// 1. 각 컴포넌트들 import
import Step1 from "./BasicInfo";
import Step2 from "./Department";
import Step3 from "./Exprience";
import Step4 from "./Introduce";
import { FormProvider, useForm } from "react-hook-form";
import { useFormStore } from "../store/formStore";

// 2. 단계 별로 컴포넌트 배열
const steps = [Step1, Step2, Step3, Step4];

export default function MultiStepForm() {
  // 3. 리액트 훅 폼 초기화
  const methods = useForm();

  // 5. 저장소에서 함수, 상태값을 이용할 수 있도록 저장소 가져오기
  const { currentStep, nextStep, prevStep, formData, setFormData } =
    useFormStore();
  
  const CurrentComponent = steps[currentStep];

  // 7. 폼 이벤트 함수 작성

  /*
    다음 버튼 혹은 제출 버튼을 클릭시, 다음으로 이동
    입력한 데이터를 저장하거나, 제출을 눌렀을 때, alert() 이용해서 보여줌
  */
  const onSubmit = (data) => {
    console.log(JSON.stringify(data,null,2));

    // 7-1 현재 단계에서 입력한 데이터 저장

    // 7-2 다음을 누르면, 다음 컴포넌트로 이동

    // 마지막 단계가 아니면, 다음으로 이동

    if(currentStep < steps.length - 1) {
      nextStep();
    } else {
      console.log('최종 제출 값' , {...formData, ...data});
      alert('제출 완료')
    }
    
  };

  // 4. 하위 컴포넌트에서 useFormContext()로 값 공유해서 사용
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="p-6 max-w-md mx-auto bg-white shadow space-y-4"
      >
        {/* 6. 현재 단계의 컴포넌트 렌더링 */}
        <CurrentComponent />

        {/* 이전,다음,제출 컴포넌트 버튼  */}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              이전
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {currentStep === steps.length - 1 ? "제출" : "다음"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

/*
  Swiper
  - 웹과 모바일에서 많이 사용하는 가장 인기있는 터치 기반 슬라이드 라이브리러
  - npm install swiper 
  - 모바일 및 테스크탑에서 호환
  - 반응형 웹 사이트를 만들 때 최적화
  - 터치 스와이퍼 이벤트를 기반으로 한 슬라이드 쇼 및 스와이퍼 기능 지원
  - css3 기반으로 애니메이션 지원
*/