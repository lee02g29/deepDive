import React, { useEffect } from "react";
import Step1 from "./BasicInfo";
import Step2 from "./ClubSelections";
import Step3 from "./Introduction";
import Step4 from "./Preview";
import { FormProvider, useForm } from "react-hook-form";
import { useJoinStore } from "../stores/formStore";

const steps = [Step1, Step2, Step3, Step4];

export default function MultiForm() {
  const methods = useForm();
  const { reset } = methods;

  const {
    formData,
    submitList,
    currentStep,
    addFormData,
    nextStep,
    prevStep,
    resetFormData,
    addSubmitList,
    returnFirst,
  } = useJoinStore();

  const CurrentComponent = steps[currentStep];

  const onSubmit = (data) => {
    console.log(data);

    if (currentStep < steps.length - 1) {
      nextStep();
      addFormData(data);
    } else {
      console.log("최종 제출 값", { ...formData, ...data });
      alert("제출 완료");
      addSubmitList(formData);
      resetFormData();
      reset();
      returnFirst();
    }
  };

  useEffect(() => {
    console.log("📦 제출 목록 (감시):", submitList);
  }, [submitList]);

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CurrentComponent />

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
    </div>
  );
}
