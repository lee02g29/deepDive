import { useState } from "react"
import On from "./components/On";
import On2 from "./components/On2";
import TimeComplextiy from "./components/TimeComplextiy";

function App() {

  // function getFirst() {
  //   alert("안녕")
  // }

  // function getArr(arr) {
  //   console.log(arr)
  // }

  // getFirst();

  // O(1)
  const [user, setUser] = useState({isLoggedIn : true})
  
  // 다크 모드
  const [isDark, setIsDark] = useState(false);

  // 버튼 클릭시 실행
  const toggleTheme = () => {
    setIsDark(!isDark); // false <-> true 전환
  }

  return (
    <>
      <h1>빅오 표기법</h1>
      <h4>O(1) 예제 - 빠르게 처리되는 코드</h4>

      {/* O(1) - 로그인 상태를 체크 
        값을 이용해서 삼항 연산자로 빠르게 표현
      */}
      <p>상태 : {user.isLoggedIn ? '로그인' : '로그아웃'} </p> 
      
      <button onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        marginTop: '20px'
      }}>
        {isDark ? '라이트 모드' : '다크 모드'}
      </button>
      <On />
      <On2 />
      <TimeComplextiy />
    
    </>
  )
}

export default App

/*
  Big-O 표기법
  - 코드, 또는 데이터가 켜지면 얼마나 느려지는지, 
  그리고 어떻게 하면 빠르게 바꿀 수 있는지 힌트를 줌
  - 성능을 체감하는 능력을 길러줌
  - 입력 크기(n)에 따라서 얼마나 빠르거나, 느린지 수학적으로 표시하는 방법

  - 입력 크기가 커질수록 코드의 실행 시간 또는 메모리 사용량이
  어떻게 증가하는지 알려주는 지표

  - O
    Order of의 줄임말
    어떤 알고리즘의 복잡도가 어떻게 증가하는지

  ex)
  - O(1) : 한 번 실행
    - 입력 크기와 상관 없이 한 번만에 끝나는 연산
    - 프론트엔드에서는 : 버튼 클릭, 배열에서 특정 인덱스값 꺼내기, 조건 한 번 검색
  
*/