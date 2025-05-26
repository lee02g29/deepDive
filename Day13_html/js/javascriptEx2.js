// 요소(태그) 생성

// 만들기
// let pTag = document.createElement("p");
// let divTag = document.createElement("div");

// console.log(pTag);
// console.log(divTag);

// /*
//   요소 안에 텍스트 넣기
// */

// // 내용 넣기
// pTag.innerText = "안녕하세요";

// console.log("p 태그 텍스트 : ", pTag);

// /*
//   html 문서로 보내기
//   - 어디로 보낼 것인지 알아야함
//   - 어떤 요소에 추가할지 결정해야함
// */

// document.body.appendChild(pTag);

/* 정리
  1. 추가할 요소 만들기
  2. 안에 내용 추가
  3. html에 추가
    - 어디에 추가할지 찾기
*/

// 1. p 태그 추가
let pTag = document.createElement("p");

// 2. innerText이용해서 내용 추가
pTag.innerText = "안녕하세요!";

// 3. 위치찾기
let box = document.getElementById("box");
box.appendChild(pTag);

let colorList = ["red", "blue", "yellow", "pink"];

// 1. li 생성
let li = document.createElement("li");
let li2 = document.createElement("li");

// 2. 내용 넣기
li.innerText = colorList[0];
li2.innerText = colorList[1];

// 3. html에 추가
/*
  'appendChild' on 'Node': The new child element contains the parent.
  - 자기 자신을 자식으로 넣을 때
*/
let boxO1 = document.getElementById("box_ol");

boxO1.appendChild(li);
boxO1.appendChild(li2);

// ---------
// 리스트에서 랜덤 값을 출력
