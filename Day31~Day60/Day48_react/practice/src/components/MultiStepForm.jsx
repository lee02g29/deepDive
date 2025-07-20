import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "./ProductInfo";
import Step2 from "./CategoryImage";
import Step3 from "./StockOption";
import Step4 from "./Preview";
import { useProductStore } from "../stores/ProductStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import { useEffect } from "react";

const steps = [Step1, Step2, Step3, Step4];

export default function MultiStepForm() {
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
  } = useProductStore();

  const CurrentComponent = steps[currentStep];

  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const onSubmit = (data) => {
    if (activeIndex < steps.length - 1) {
      addFormData(data);
      swiperRef.current?.slideNext();
    } else {
      console.log("최종 제출 값", { ...formData, ...data });
      alert("제출 완료");
      addSubmitList({ ...formData, ...data });
      resetFormData();
      reset();
      swiperRef.current?.slideTo(0);
      setActiveIndex(0);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      swiperRef.current?.slidePrev();
    }
  };

  const handleNext = async (fields) => {
    const isValid = await methods.trigger(fields);

    console.log(isValid);

    if (isValid) {
      const currentValues = methods.getValues();
      addFormData(currentValues);
      console.log(formData);
      swiperRef.current?.slideNext();
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    console.log("제출된 상품 목록", submitList);
  }, [submitList]);

  return (
    <div>
      {" "}
      <div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              touchStartPreventDefault={false}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
            >
              {steps.map((StepComponent, index) => (
                <SwiperSlide key={index}>
                  <StepComponent
                    {...(index > 0 && { prev: handlePrev })}
                    {...(index < steps.length - 1 && { next: handleNext })}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <div className="flex justify-between">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
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
            </div> */}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
