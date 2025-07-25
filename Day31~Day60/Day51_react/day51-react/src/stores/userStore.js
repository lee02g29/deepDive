import { create, useStore } from "zustand";

/*
  1. 사용자가 폼에 입력 입력
  2. store에 저장
  3. 확인 버튼을 누르면 스토어의 값이 화면에 반영
*/

export const useUserStore = create((set) => (
  {
    name: '',
    setName: (newName) => set({name : newName})
  }
))