function liked(element) {
  // var liked = document.getElementById("liked").innerHTML;
  // document.getElementById("liked").innerText = Number(liked) + 1;

  // html에서 this 클릭된 요소를 자바스크립트의 function의 인자인 element 변수에 저장
  element.classList.toggle("heart-red");

  // 하트 채우기
  element.classList.toggle("bi-heart");
  element.classList.toggle("bi-heart-fill");

    /*
      toggle()
      - 해당 요소에 클래스 이름이 있으면 제거, 
      없으면 추가하기

      on/off 스위치

      자바스크립트의 동작을 줄 때는 반드시
      1. 동작 전 디자인
      2. 동작 후 디자인
      3. 동작의 시작은 어느 것으로 할지 고민
      - 마우스 클릭, 드래그, 키를 눌렀을 때, 포인트가 밖으로 나갔을 때
    */

  /* 선택(if 문) {
    } */

  // 만약에 하트가 채워져 있으면 heart 하트의 개수
  // 저장하는 변수의 값이 1 증가, 만약에 빈 하트라면 변수의 값 1 감소

  if (element.classList.contains("bi-heart-fill")) {
    // 변수를 저장하는 =(대입 연산자)
    // 연산자 단위는 기호
    // 실행하는 순서가 오른쪽에서 왼쪽으로 저장되는 순서
    heartValue = heartValue + 1;
  }

  if (element.classList.contains("bi-heart")) {
    // 변수를 저장하는 =(대입 연산자)
    // 연산자 단위는 기호
    // 실행하는 순서가 오른쪽에서 왼쪽으로 저장되는 순서
    heartValue = heartValue - 1;
  }

  // 변경된 값을 html로 보내서 내용을 수정
  document.getElementById("liked").innerText = heartValue;
}

// 다크 모드를 실행하는 문장
function darkMode() {
  // 1. document 문서를 찾음
  // 2. 찾음. 유일한 값 id를 이용하여 div를 찾음
  // 3. 배경을 변경하는 css 설정
  // 4. classList를 이용헤서 붙임

  // classList
  // - html 요소의 class 속성(클래스 이름)을 자바스크립트에서 조작하기 쉽게 도와주는 속성
  // add("클래스 명") 클래스 추가만
  // remove 클래스 삭제만
  // contains 클래스 명이 있는지 확인하는 기능
  document.getElementById("wrap").classList.toggle("dark-mode");
}

function bookmark(element) {
  var bookmark = document.getElementById("bookmark").innerHTML;
  // document.getElementById("bookmark").innerText = Number(bookmark) + 1;

  element.classList.toggle("bi-bookmark");
  element.classList.toggle("bi-bookmark-fill");

  if (element.classList.contains("bi-bookmark-fill")) {
    bookmark = Number(bookmark) + 1;
  }

  if (element.classList.contains("bi-bookmark")) {
    bookmark = Number(bookmark) - 1;
  }

  document.getElementById("bookmark").innerText = bookmark;
}

function comment(element) {
  var comment = document.getElementById("comment").innerHTML;
  // document.getElementById("comment").innerText = Number(comment) + 1;

  element.classList.toggle("bi-chat");
  element.classList.toggle("bi-chat-fill");

  if (element.classList.contains("bi-chat-fill")) {
    comment = Number(comment) + 1;
  }

  if (element.classList.contains("bi-chat")) {
    comment = Number(comment) - 1;
  }

  document.getElementById("comment").innerText = comment;
}

function share() {
  var share = document.getElementById("share").innerHTML;
  document.getElementById("share").innerText = Number(share) + 1;
}

// 값을 기억하는 공간 -> 변수
//  var 공간이름 = 값;
// 자바스크립트는 변수 선언(메모리 공간 생성) 타입 시스템
// - 자바 스크립트는 자동으로 값의 타입을 저장

var heartValue = 5;
var greeting = "hello";

// 아래처럼 작성하면 어떤 결과값을 확인하는지 모름
// 따라서, 앞에 메시지를 작성
console.log(heartValue);
console.log("좋아요 개수 : ", heartValue);

// 문자열
//  - 문자 여러개
console.log("문자열의 길이 : ", greeting.length);
