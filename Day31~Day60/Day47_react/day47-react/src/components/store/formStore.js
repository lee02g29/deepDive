import { create } from "zustand";

export const useFormStore = create((set) => ({
  formData: {},
  currentStep: 0,

  setFormData : (newData) => 
    set((state) => ({
      formData : {...state.formData,...newData}
    })),
  nextStep : () => set((state) => ({
    currentStep: state.currentStep + 1
  })),
  prevStep : () => set((state) => ({
    currentStep: state.currentStep - 1
  })),
}));

/*
  논리적인 에러가 발생할 수 있는 것을 방지
  step: 1
  next: () => set({step, Math.min(s.step + 1, 4)})
*/