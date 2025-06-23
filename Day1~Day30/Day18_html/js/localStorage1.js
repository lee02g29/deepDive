/*
  로컬 스토리지
  사용자의 브라우저 안에 데이터를 영구적으로 저장할 수 있는 공간
  key-value 구조 데이터를 저장
  브라우저를 꺼도 유지되며, 동기적 처리를 함

  단점
  - 저장 용량이 작음(5mb)
  - 보안에 민감한 정보는 저장 x

  브라우저 속에 메모장
*/

/* 
로컬 스토리지에서 key는 중복되면 안됨
setItem(key, value)
*/

// localStorage.setItem("이름", "홍길동");

/* 저장된 데이터 꺼내기 */
// const name1 = localStorage.getItem("이름")
// console.log("스토리지 이름: ", name1);

function save() {
  localStorage.setItem("id", "perdy");
}

function load() {
  // 1. 스토리지에서 꺼냄
  const id = localStorage.getItem("id");
  // 2. alert창에 넣어서 보이기
  alert(id);
}

// 비밀번호
function pwSave() {
  let password = document.getElementById("pwInput").value;
  localStorage.setItem("password", password);
}

function pwLoad() {
  let password = localStorage.getItem("password");
  console.log(password);
  document.getElementById("result").innerText = password;
}

// 이메일
function saveEmail() {
  let email = document.getElementById("emailInput");

  setTimeout(() => {
    localStorage.setItem("email", email.value);
    alert("저장완료");
    email.value = "";
  }, 3000);
  // email.value=''
  /* 
    실행되기 전에 초기화가 진행됨 
    이 때, 에러는 안나지만 값이 저장되지 않음
  */
}

// 현재 시간
/*

*/
setInterval(() => {
  // 현재 날짜와 시간을 가지고 있음
  let time = new Date();

  // 연도
  let years = time.getFullYear();
  /* 
    달(0 ~ 11) 
    내부적으로 달도 배열처럼 관리하개 때문에 0부터 처리
  */
  let months = time.getMonth() + 1;
  // 일(1 ~ 31)
  let date = time.getDate();

  /* toLocaleTimeString() -> 문자열로 
    - 기본 값은 브라우저 설정에 따라 자동으로 결정
    옵션을 설정하면 24시간제 등을 조정가능
    - 시간을 현재 지역에 맞게 보여줌
  */
  // 시
  let hours = ("0" + time.getHours()).slice(-2);
  // 분
  let minutes = ("0" + time.getMinutes()).slice(-2);
  // 초
  let seconds = ("0" + time.getSeconds()).slice(-2);

  const timeStr = time.toLocaleTimeString();
  let now = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").textContent = now + "\n" + timeStr;
  localStorage.setItem("lastClock",timeStr);
}, 1000);
