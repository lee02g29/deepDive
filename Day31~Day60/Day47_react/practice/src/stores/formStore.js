import { create } from "zustand";

export const useJoinStore = create((set) => ({
  formData: {},
  submitList: [],
  currentStep: 0,

  addSubmitList: (newData) =>
    set((state) => ({
      submitList: [...state.submitList, newData],
    })),
  addFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),
  resetFormData: () =>
    set((state) => ({
      formData: {},
    })),
  nextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
    })),
  prevStep: () =>
    set((state) => ({
      currentStep: state.currentStep - 1,
    })),
  returnFirst: () =>
    set((state) => ({
      currentStep: 0,
    })),
}));
