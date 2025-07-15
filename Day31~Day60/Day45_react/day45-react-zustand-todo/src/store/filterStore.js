
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useFilterStore = create((set) => ({
  filter: 'all',
  selfFIlter: (filter) => set({filter})
}))

/*
  미들웨어 기능을 추가한 스토리지 생성
  persist : name 속성의 이름
  브라우저 로컬 스토리지에 JSON 형태로 상태가 저장되고 복원됨
  name에 작성한 속성 이름으로 저장됨
*/

const useStore = create(
  persist(
    (set, get) => ({}),
    {name : 'my-app-storage'}
  )
)

// immer를 사용한 store 생성
const useStoreImmer = create(
  immer((set, get) => ({
    todos : [],
    addTodo : (text) =>
      set(state => (state.todos.push({
        text, done: false
      })))
  }))
);

// immer를 사용하지 않는 코드
const useStoreImmer2 = create((set, get) => ({
    todos : [],
    addTodo : (text) => set((state) => ({
      todos: [...state.todos, {text, done: false}]
    }))

}));

// devtools를 이용한 스토어 작성
const useStore3 = create(
  devtools((set, get) => ({
    count: 0,
    increment: () => set({count: get().count + 1}),
  }), {name : 'counter-store'})
)

// 미들웨어를 모두 합친 스토어
const useTotalStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        // 상태와 액션 작성
      }))
    ), 
    {name : 'total-store'},
  )
)


/*
  대규모 앱에서 생각해야하는 문제
  - 도메인(Feature) 단위 필터링
  - feature/todo/{components, store, types}
  - 타입스크립트 적용
  - 미들웨어 활용 : 로컬스토리지 동기화, immer 불변성 관리,
    devtools 연동
  - API 연동 : React-query, Axois 인터셉터 결합해서 서버 상태관리

  미들웨어
  - 스토어(상태 관리 조직)와 실제 사용 코드 사이에서 특별한 부가 기능을 수행하는 장치
  - dispatch와 reducer 사이에서 추가적인 작업을 하는 함수
    ex) 비동기 작업 처리(API 요청), 액션 발생 위치 콘솔 출력, 에러 핸들링(디버깅)
    - dispatch -> 미들웨어 통과 -> reducer state 변경 -> 

  - Zustand를 사용할 때 3가지 기능
    - 상태를 브라우저 로컬 스토리지에 자동으로 저장
    - 페이지를 새로 고침해도(또는 브라우저가 꺼졌을 때), 마지막 생태를 그대로 복원

    웹 사이트에서 버튼을 누르면 요청(request) -> 처리(핵심 로직) -> 응답(response)

    이 사이에 로그 남기기, 권한 확인, 에러 처리 등을 
    매번 끼워넣으면 불편함 -> 중간에서 자동으로 처리해주는 것이 미들웨어

  immer
  - set 함수 내에서 상태를 직접 수정하듯, 코드를 쓰면 내부적으로 불변성을 지켜주는 방식으로 처리
  - 객체, 배열을 복사해서 새로운 상태를 만드는 번거로운 코드를
    줄여주고 실수 방지

  devtools
  - 리덕스 devtools와 같이 외부 개발 도구를 연결해서, 상태 변화 이력을 타임라인 형태로 볼 수 있게해줌
  - 액션이 언제, 어디서 발생했는지 한눈에 파악 가능. -> 버그 추적이 쉬워짐
*/