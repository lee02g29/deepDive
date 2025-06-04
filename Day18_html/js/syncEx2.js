/* n초 있다가 실행 
비동기 함수 setTimeout()

공간 자체를 없앰
*/
// setTimeout(function() {
//   const alertBox = document.getElementsByClassName("alert")
//   console.log(alertBox[0]);

//   alertBox[0].style.display = "none"
// }, 5000);

/*
  호이스팅 문제 때문에,
  항상 실행문이 나오기 전에 위에 작성
*/
function hello() {
  console.log("2초 있다가 실행")
}

setTimeout(hello, 2000);

/*
  setInterval(function() {실행할 코드}, 기다릴 시간);
  - 지정된 시간마다 코드를 반복적으로 실행
  - 타이머 아이디를 생성
  - 콜백함수를 반복적으로 실행하도록 예약함
  - 타이머 식별자(ID) 생성

  반복을 멈추는 함수
  clearInterval(타이머 ID)

  1초마다 콘솔에 이모지 출력
*/
const timer = setInterval(function () {
  console.log("hello");
}, 1000);
console.log("timer", timer);

const timer2 = setInterval(function () {
  console.log("월요일");
}, 2000);
console.log("timer2", timer2);

setTimeout(function () {
  clearInterval(timer);
  clearInterval(timer2);
  console.log("🖐️");
}, 50000);

/*
  비동기 처리구조(이벤트 루프)
  https://www.jsv9000.app/ 

  - 비동기 작업들을 처리하기 위한 핵심 매커니즘
  - 자바스크립트 엔진은 Call Stack이라는 호출 스택을 이용해서
  동기코드를 순서대로 실행
  - 단, 타이머(setTimeout), Ajax, Fetch, Dom이벤트(conClick 등) 같은
  비동기 함수들은 호출 스택에서 바로 실행x
  - Web API라는 브라우저에서 제공되는 백그라운드 환경으로 전달됨


  Ex) 커피 주문 시스템
  - call Stack(주문 받는 직원)
  - web Api(바리스타)
  - 만들고 준비, 다 만들고 다면 준비 완료. event queue(대기 줄)
  - Event Loop(호출 직원)
    호출 시 음료를 가져감

  순서 정리
  1. 동기 코드(메인 스크립트) Call Stack에 차례로 쌓여서 실행
  2. setTimeout, fetch, onClick 같은 비동기 호출 시 -> Web API로 전달
  3. Web Api 작업 완료시 -> Event Queue에 콜백 보관
  4. 이벤트 루프가 계속 Call Stack 확인 
  -> 스택이 비어있으면, Event Queue의 첫 번째 콜백을 꺼내 Call Stack 이동
  5. 이동된 콜백 함수 실행 
  -> 또 다른 비동기 호출이 있으면 2번으로 돌아가고 없으면 스택이 비기를 기다림

  Web Api
  - XMLHttpRequest(Ajax)
  - 서버와 비동기적으로 데이터를 교환할 수 있는 객체

  Time Api
  - 일정한 시간을 간격으로 함수를 실행하거나, 지연시키는 메서드들을 제공
  canvas api,   
*/
