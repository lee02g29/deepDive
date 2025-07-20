import React, { useCallback, useState } from "react";

// 자식 컴포넌트
// React.memo으로 감싸지 않으면 자식에게 데이터를 전달 할 때, 똑같은 값을 전달해도
// 계속 렌더링을 함. 그래서 React.memo()를 쓰면 전달되는 값이 바뀌지 않으면 렌더링이 되지 않음
const Child = React.memo(({ onclick }) => {
  console.log("Child 렌더링");
  return <button onClick={onclick}>자식 버튼</button>;
});

export default function UseCallBackTest() {
  const [count, setCount] = useState(0);

  // useCallback으로 함수 메모이제이션
  const handleChildClick = useCallback(() => {
    console.log("자식 버튼 클릭됨");
  }, []);
  // [] : 배열은 한번만 만들어짐

  return (
    <div>
      <h3>useCallback을 안 썼을 때</h3>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>부모 버튼(+)</button>

      <Child onclick={handleChildClick} />
    </div>
  );
}

/*
  useCallback
  - 리렌더링을 할 떄마다 함수를 새로 만들지 않고 이전에 만든 함수를 제거해서
    성능을 최적화해주는 리액트 폼

  useCallBack(fn, dpes)
  - fn :기억하고 싶은 콜백함수
  deps : 이 값이 바뀔 때만 fn 새로 생성

  사용하는 이유
  - 리액트는 함수 컴포넌트가 렌더링 될 때 함수도 다시 만들어짐
  - 이로 인해 리렌더링이 될 때마다, 불필요하게 useEffect가 있다면 의도치 않게 반복 실행됨

  실제 사용 스타일
  - 자식 컴포넌트를 최적화 -- react.memo + useCallback
  - 이벤트 핸들러 고정

  장점
  - 성능 개선
  - 리렌더링 줄임
  - 함수 재생성 방지

  단점
  - 남용시 코드가 복잡해짐
  - 불필요한 사용은 오히려 메모리 낭비

*/
