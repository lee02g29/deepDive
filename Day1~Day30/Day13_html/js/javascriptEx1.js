// 'use strict' // 엄격 모드
/*
  자바스크립트 배열
  - 여러 가지의 데이터를 순서대로 저장함

  이전에 요소(태그)를 찾을 때, className으로 찾았음
  이번에는 요소를 찾을 때, tagName을 사용하여 찾을 것
*/

/*
  항상 실행하는 문장 위에 변수 만들기
  let 사용 -> 공간의 타입을 자동으로 저장
*/

/*
  getElementsByTagName
  태그 명을 기준으로 데이터를 가져옴
  여러 개를 담는 배열로 가져옴
*/
let pBox = document.getElementsByTagName("p");

// 배열의 사이즈
console.error("pBox의 개수", pBox.length);

/* pBox에 있는 값 꺼내서 text만 저장하기 */
let fruitsBox = [];

fruitsBox.push(pBox[0].innerText);
fruitsBox.push(pBox[1].innerText);
fruitsBox.push(pBox[2].innerText);

/*
if(비교하는 문장) {
  비교하는 문장이 맞다면 실행
}

사과라는 단어가 있으면 결과창에 보이지 않기
*/

if (pBox[0].innerText !== "사과") {
  console.log(pBox[0].innerText);
}

if (pBox[1].innerText !== "사과") {
  console.log(pBox[1].innerText);
}

if (pBox[2].innerText !== "사과") {
  console.log(pBox[2].innerText);
}

function btn() {
  // 버튼 클릭시 input 태그에 있는 입력한 내용을 콘솔창에 출력

  // input 태그에 입력한 값을 가져올 때는 value를 사용
  let value = document.getElementById("addValue").value;
  console.log(value);

  // 빈 문자가 아니라면 배열에 추가
  if (value !== "") {
    // 버튼 클릭시 input 태그에 입력하는 내용 fruitBox에 추가가
    fruitsBox.push(value);
    console.log(fruitsBox);
  }
}

/* 배열에 데이터 넣기
저장할 공간 먼저 생성 */

// let fruitsBox = [];

// console.log("과일 리스트 : ", fruitsBox);
// fruitsBox.push("딸기");
// console.log("과일 리스트 : ", fruitsBox);
// fruitsBox.push("수박");

// console.log(pBox)
