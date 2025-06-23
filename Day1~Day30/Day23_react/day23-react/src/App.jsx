import EventBubbling1 from "./components/eventEx/EventBubbling1"
import EventBubbling2 from "./components/eventEx/EventBubbling2"
import EventBubbling3 from "./components/eventEx/EventBubbling3"
import ReactHookFormEx1 from "./components/eventEx/ReactHookFormEx1"
import EventDelegationEx from './components/eventEx/EventDelegationEx';
import UseEffectEx1 from './components/useEffect/UseEffectEx1';

function App() {

  return (
    <>
      {/* <EventBubbling1 /> */}
      {/* <EventBubbling2 /> */}
      {/* <EventBubbling3 /> */}
      {/* <ReactHookFormEx1 /> */}
      {/* <EventDelegationEx /> */}

      <UseEffectEx1 />
    </>
  )
}

export default App

/*
  컴포넌트
  - 긴 코드를 하나의 태그로 바꿈
  - HTML를 직접 묶어 자신만의 태그로 만듦
  
어떤 것들을 컴포넌트로 만드는 것이 좋은지
  - 사이트에서 반복해서 출현하는 덩어리들을 컴포넌트로 만들면 좋음
  - 내용이 매우 자주 변경될 것 같은 부분을 컴포넌트로 만들면 좋음
  - 다른 페이지를 만들고 싶다면, 그 페이지를 컴포넌트로 만듦
  - 또 다른 팀원들과 협업 할 때, 웹 페이지를 컴포넌트로 단위로 나눠서 작업을 분리

  */