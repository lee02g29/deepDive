import Fibo from "./Fibo"
import Lcs from "./Lcs"
import Test4 from "./ProCos2_1/Test4";
import Test6 from "./ProCos2_1/Test6";


function App() {

  const arr = Array.from({length: 5}, () => 0);
  console.log(arr);

  const arr2 = Array.from({length: 5}, (_, i) => i + 1)
  console.log(arr2);

  /*
    fill()
    - 괄호 안에 똑같은 값을 배열에 채움

    from(길이, 콜백 함수)
    - 몇 칸짜리를 만들고, 어떤 값을 넣을지 정하는 함수
    - 실제 반복문 없이 배열을 초기화 할 때 많이 사용하는 문법
    - 로딩 상태, 카트 목록 초기 렌더링 등
    - 실무에서도 많이 사용함
  */


  return (
    <>
      <Fibo />
      <Lcs />
      <Test4 />
      <Test6 />
    </>
  )
}

export default App

/*
  동적 프로그래밍(Dynamic Programming = DP) 
  - 중복 부분 문제와 최적 부분 구조를 가지는 문제를 해결
  - 작은 문제부터 차례대로 풀어서 그 결과를 저장(메모이제이션 혹인 테이블 체우기)
  - 저장 이후 같은 문제가 다시 필요할 때, 저장한 값을 활용해 불필요한 연산을 제거하는 기법

  - 한 번 푼 문제들을 저장해두었다가 재사용함으로써 전체 계산량을 줄이는 것
  - 

  - 재귀적으로 계속 호출하게 되면 심한 중복이 일어남

  - 리액트에서는 성능 
  최적화, 캐싱, 데이터 처리 최적화에 자주 활용됨
    - useMemo, useCallback, React Query캐시 등

  - 백엔드에서 통신에서는 중복 요청을 줄어거나, 결과를 재활용함

  - 장점: 
    - 속도를 극적으로 항샹 시킬 수 있음(캐시 활용)
    - 프론트에서도 알고리즘 인터뷰 대응 가능
  
  - 단점
    - 초기엔 개념 이해가 어려움
    - 상태 저장 공간이 늘어날 수 있음
    - 잘못 쓰면 느려질 수 있음
*/