// 동기식 처리
// console.log("1 : 시작")
// alert("2 : 이 알림을 닫야아 다음이 실행됨")
// console.log("3: 완료")

/*
  함수
  - 긴 코드를 하나로 묶음
  - 한 번 만들어놓으면 필요할 때마다 재사용 가능
*/

/* 
콘솔에 순차적으로 출력.
func1 -> func2-> func3 순서대로 출력 
*/

// function func1() {
//   console.log("func1");
//   func2()
// }

// function func2() {
//   console.log("func2");

//   for(let i = 1; i <= 5; i++) {
//     console.log("😺")
//   }
//   func3()
// }

// function func3() {
//   console.log("func3");
// }

// func1()

// 비동기

console.log("1 : 커피 주문")

/* 콜백 함수 
- 나중에 실행하기
- 어떤 동작을 할 지 작성
*/

/* 
  setTimeout : 일정 시간이 지나고 실행 
  setTimeout(fuction () {실행할 코드}, 기다릴 시간)
  시간은 ms 단위로 적용
  1초 -> 1000ms
*/
setTimeout(() => {
  console.log("☕")
  // 3초 있다가 커피가 나옴
},3000)

console.log("3 : 다른 사람 주문 받기")