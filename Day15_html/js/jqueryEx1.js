/* 
  제이쿼리도 자바스크립트를 기반으로 만들어준 도구
  확장자도 동일하게 .js

  제이쿼리를 시작할 때, 무조건 $를 앞에 붙여야함
  자바스크립트 문법과 구별하기 위해서 제이쿼리는 $를 사용
*/

// 제이쿼리 문법
console.log($("h1"));

// id를 가진 p태그를 찾기
// js
document.getElementById("first");

// jqery
let findId = $("first");
console.log("아이디 값 : ", findId);

// 클래스
// js
document.getElementsByClassName("box");

// jquery
let findClass = $(".box");
console.log("클래스 값 : ", findClass);


// input 태그 안에 있는 값 꺼내기
let value = $('#box__input').val();
console.log("입력 값 가져오기", value)

$('#box__input').val('hi');
console.log("입력 값 가져오기", value)