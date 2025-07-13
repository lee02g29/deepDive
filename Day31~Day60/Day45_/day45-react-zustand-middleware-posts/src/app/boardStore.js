import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

/* 
  번들
  - 모듈 통합

  - 개발중엔 파일을 여러개로 쪼개서 씀
  - 브라우저는 수백 개의 파일을 동시에 요청하는 상황에서 성능 저하가 발생할 수 있음

  번들러(vite, parcel, webpack, rollup 등)을 사용해서 
  하나 혹은 몇 개의 파일로 합침

  모듈간 import 경로를 분석해서 어떤 순서로 합칠지 계산함

  필요한 이유
  - 네트워크 요청 최소화 : 파일이 너무 많으면 http 요청이 늘어나 페이지 로드가 늦어짐
  - 호환성 : 구형 브라우저에서도 동작하도록 트랜스파일을 해서 묶어줌
  - 최적화 : 코드 압축, 코드 분할로 초기 로딩 속도와 실행 성능을 높임
*/

export const useBoardStore = create(
  devtools(
    immer((set) => ({
      posts: [],
      currentId: 1,
      addPost: (title, content) =>
        set((state) => {
          state.posts.push({
            id: state.currentId++,
            title,
            content,
          });
        }),
      deletePost: (id) =>
        set((state) => {
          state.posts.filter((post) => post.id !== id);
        }),
      updatePost: (id, title, content) =>
        set((state) => {
          const post = state.posts.find((post) => post.id === id);
          if (post) {
            post.title = title;
            post.content = content;
          }
        }),
    })),
    { name: "board-store" }
  )
);

/*
  미들 웨어를 확인하기 위해 redux devTool 확장 프로그램 필요

*/
