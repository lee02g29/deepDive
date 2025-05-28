/*
  querySelector
  - css선택자 문법을 이용해서 html 문서에서 
  가장 처음으로 일치하는 요소 하나만 가져옴     
  
  querySelectorAll
  - css 선택자처럼 Html 요소를 한 번에 여러 개 선택할 수 있는 기능
  - 선택된 요소들은 배열처럼 생긴 NodeList라는 형태로 반환

  html안에 여러 개의 박스, 버튼, 탭, 리스트 딩이 있을 때,
  이름이 같은 것들은 모두 가져와 css 문법으로 사용

  NodeList
  - 자바스크립트에서 여러 개의 Dom 요소를 배열처럼 묶어놓은 객체
  - 여러 html 요소를 모아놓음
*/

const tabBtn = document.querySelectorAll(".tab-button");
// console.log(tabBtn);
// console.log(tabBtn[0].textContent)
// console.log(tabBtn[1].textContent)
// console.log(tabBtn[2].textContent)

const tabContent = document.querySelectorAll(".tab-content");

/* 
  0번 버튼을 클릭하면, 
  현재 탭 컨텐츠 클래스에서 show를 제거

  addEventListener(리액션, 함수)
*/

// tabBtn[0].addEventListener("click", function () {
//   tabContent[0].classList.remove("show");
//   tabContent[1].classList.remove("show");
//   tabContent[2].classList.remove("show");

//   tabBtn[0].classList.remove("orange");
//   tabBtn[1].classList.remove("orange");
//   tabBtn[2].classList.remove("orange");

//   tabContent[0].classList.add("show");
//   tabBtn[0].classList.add("orange");
// });

// tabBtn[1].addEventListener("click", function () {
//   tabContent[0].classList.remove("show");
//   tabContent[1].classList.remove("show");
//   tabContent[2].classList.remove("show");

//   tabBtn[0].classList.remove("orange");
//   tabBtn[1].classList.remove("orange");
//   tabBtn[2].classList.remove("orange");

//   tabContent[1].classList.add("show");
//   tabBtn[1].classList.add("orange");
// });

// tabBtn[2].addEventListener("click", function () {
//   tabContent[0].classList.remove("show");
//   tabContent[1].classList.remove("show");
//   tabContent[2].classList.remove("show");

//   tabBtn[0].classList.remove("orange");
//   tabBtn[1].classList.remove("orange");
//   tabBtn[2].classList.remove("orange");

//   tabContent[2].classList.add("show");
//   tabBtn[2].classList.add("orange");
// });

// ---

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener("click", function () {

    for (let j = 0; j < tabBtn.length; j++) {
      tabBtn[j].classList.remove("orange");
      tabContent[j].classList.remove("show");
    }

    tabBtn[i].classList.add("orange");
    tabContent[i].classList.add("show");
  });
}

// ---

