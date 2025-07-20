import setUser from "./components/CustomHook/useUser";
import useDebounce from "./components/CustomHook/useDebounce";
import useInput from "./components/CustomHook/useInput";
import UseToggle from "./components/CustomHook/UseToggle"
import useWindowSize from "./components/CustomHook/useWindowSize";
import ReactQuery1 from "./components/ReactQuery/ReactQuery1";
import ReactQuery2 from "./components/ReactQuery/ReactQuery2";


function App() {

  const [on, toggle] = UseToggle();
  const name = useInput('')
  const debounced = useDebounce(name.value, 1000);
  const {width, height} = useWindowSize();
  const {user, isLoading} = setUser()

  return (
    <>
      {/* <h3>useToggle 커스텀 훅</h3>
      <p>토글 상태 : { on ? '켜짐' : '꺼짐' }</p>
      <button onClick={toggle}>Toggle</button>

      <h3>useInput 커스텀 훅</h3>
      <input {...name} placeholder="이름을 입력"/>
      <p>입력 값 : {name.value}</p>
      <button onClick={name.reset}>Reset</button>

      <h3>useDebounce 커스텀 훅</h3>
      <input {...name} placeholder="검색어 입력"/>
      <p>실시간 입력 : {name.value}</p>
      <p>디바운싱(1초 후) : {debounced}</p>

      <h3>useWindowSize 커스텀 훅</h3>
      <p>현재 창 크기: {width}px * {height}px</p>
      {
        width < 768 ? (<p>모바일</p>) : (<p>데스크탑</p>)
      } */}

      {/* <h3>setUser 커스텀 훅과 사이드 이펙트 예제</h3>
      {
        isLoading ? 
        (<p>Loading...</p>) :
        (<p>{user?.name} / {user?.email}</p>)
      } */}

      {/* <ReactQuery1 /> */}
      <ReactQuery2 />
    </>
  )
}

export default App

/*
  커스텀 훅(Custom Hook)
  - 컴포넌트 간에 상태 로직이나, 사이드 이펙트 로직을 재사용할 때가 많음
  - 어떤 데이터를 불러오는 로직, 폼 입력을 처리하는 로직, 특정 이벤트 리스너를 추가하는 로직 등이
  여러 컴포넌트에서 비슷하게 사용될 수 있음
  - use로 시작
  - 직접 상태 관리를 만듦

  리팩토링(Refactoring)
  - 기능을 그대로 유지하면서, 코드를 가독성이 있고 재사용이 가능하게 정리하는 것
  - 기능은 동일하지만, 코드는 더 짧고 가독성있으며 유지보수도 쉽게

  사이드 이펙트(Side Effect)
    - 컴포넌트가 렌더링 외에 다른 상태를 변경하는 행위
    - 부수적인 일
    - 사이드 이펙트는 무조건 useEffect 안에서 처리

  커스텀 훅을 나누는 기준
    - 중북된 로직 반복
      - 여러 컴포넌트가 같은 useState, useEffect, fetch 등을 쓰고 있다면 분리 대상
      - 하나의 책임을 가지는 상태 묶음
      - 사이드 이펙트 관리(외부 API 호출, 이벤트 리스너 등록)도 분리 대상
      - 계산, 변환, 필터링을 분리시켜 재사용성 확보
      - react-query, swiper, form 등의 훅을 감싸서 커스텀 제어

*/