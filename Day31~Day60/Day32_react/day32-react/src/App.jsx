import { useRef } from "react";
import FocusInput from "./refComponents/FocusInput";
import AutoScrollChat from './refComponents/AutoScrollChat';

function App() {
  let ref = useRef(0);

  // current : 처음 전달한  값

  function handleClick() {
    ref.current = ref.current + 1;
    alert("clicked :" + ref.current + "times");
  }

  // useRef is not define -> import 문이 빠짐

  return (
    <>
      <h1>useRef</h1>
      {/* <button onClick={handleClick}>클릭</button> */}
      {/* <FocusInput /> */}
      <AutoScrollChat />
    </>
  );
}

export default App;

/*
  useRef
  - 저장 공간이나 DOM요소에 접근하기 위해 사용되는 훅
  - state -> 값을 유지하면서 자동으로 리렌더링
  - ref -> 값은 유지하면서 자동으로 리렌더링 X
  - const 뱐수형 = useRef(초기값)
  - 초기값은 처음 렌더링 이후로부터는 무시
  - 값을 보관할 때는 전체 주기동안 마운트 -> 업데이트 -> 언마운트
  - 무한루프 위험 x 

  언제 사용하는지
  - DOM 요소 제어 : 입력창 포커스, 스크롤 위치 측정, 조정
  - 이전값 보관 : 직접 상태 비교
  - 타이머ID


*/
