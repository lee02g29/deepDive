/* 
1. 은행 계좌 클래스 
  owner(사용자명), balance(잔액)

  각각 변수를 만들어서 저장하고 출력
*/

/*
2. 게시판 클래스
board, title, author, content

각각 변수를 만들어서 저장하고 출력
*/

class Board {
  constructor(title = "", author = "", content = "") {
    this.title = title;
    this.author = author;
    this.content = content;
  }
}

let post1 = new Board();
post1.title = "새로운 게시판";
post1.author = "admin";
post1.content = "테스트";

let post2 = new Board("와!", "escher", "와 게시판");

console.log(post1, post2);

/*
  비동기 통신
  - 사용자가 서버에 요청을 보낸 뒤, 응답이 오기 전까지 기다리지 않고
    다른 작업을 계속 할 수 있는 방식

  - 페이지가 멈추지 않고 결과를 받아올 수 있음
  - 새로고침 하지 않아도 데이터를 실시간으로 보여줄 수 있음

  fetch(주소)
  .then() 요청한 데이터가 정상적으로 들어왔다면 실행
  .catch() 만약 예외가 발생했을 때 처리
*/

/*
  json 예제
*/

fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => console.log(res.json())
  // 자바스크립트 객체로 변환하면서 promise 객체로 반환
).catch();

// status 상태 보드가 200이면 정상적으로 다운받음
