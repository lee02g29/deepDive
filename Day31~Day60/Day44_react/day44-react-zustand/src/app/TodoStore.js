import { create } from "zustand";

/* 
  create() : store를 만드는 함수
  set(): 상태를 변경하는 함수
  useTodoStore 사용자가 훅을 직접 만들어서 상태에 접근하고,
  조작할 수 있도록 한것을 커스텀 훅이라고 함

  set: 상태를 바꾸는 함수
  create((set, get) => ({
    상태(state 저장할 공간),
    액션: () => set(새로운 상태)
    }))
*/
export const useTodoStore = create((set) => ({
  todos: [],
  // 할일 추가
  addTodo: (title) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          title,
        },
      ],
    })),
  // 할일 삭제
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
