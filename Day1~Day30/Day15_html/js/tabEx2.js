/*
  개발자 도구 -> 스토리지 종류
*/

/*
  반복문
  - 비교(조건이 맞으면 계속함), 조건이 다르면 멈춤

  같은 작업을 여러 번 해야할 때, 반복문을 사용

  while

  for(시작하는 값; 비교문; 증감식) {
    반복할 내용
  }
*/

/*
  배열을 반복문을 이용해서 변경
  배열의 공간 번호는 0번부터 시작
  start 변수명을 이용해서 0부터 카운트
*/
let fruits = ["🍇", "🍎", "🍌", "🍏"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

for (let start = 0; start <= 3; start += 1) {
  console.log(fruits[start]);
}

/*
  자동으로 반복의 횟수를 정하고 배열의 개수만큼만 동작하기를 원할 때

  for ... in 반복문
  object에서 key값만 반복
*/

for (let fruit in fruits) {
  console.log(fruit); // 번호만 가져옴
  console.log(fruits[fruit]);
}

let bag = {
  책: "수학책",
  연필: 28,
  공책: "노트",
};

// key값만 가져오는 in 방식은 책, 연필, 공책을 가져옴
for (let pro in bag) {
  console.log("key : ", pro);
  console.log(bag[pro]);
}

/*
  value만 가져와서 반복하는 반복문
  하나씩 꺼내어 값(value)를 반복 할 수 있음
  for... of 반복문
*/
let foods = {
  아침: "🍖",
  점심: "🍚",
  저녁: "🍳",
};

/*
  에러 발생
  - TypeError : foods is not iterable
  - 배열, 문자열, set/map 타입만 of 반복문 사용 가능
*/

/*
  객체를 배열로 변경하는 방법
  객체의 모든 속성값값을 꺼내서 배열로 만들어줌

  Object.values
*/
for (let food of Object.values(foods)) {
  console.log(food);
}

// ----

// 1. 버튼 찾기
const tabBtn = document.querySelectorAll(".tab-button");

// 2. 탭 컨텐트 찾기
const tabContent = document.querySelectorAll(".tab-content");

// 3. 이벤트 달기

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener("click", function () {
    console.log("현재 눌린 버튼 : ", tabBtn[i].textContent, i);

    tabContent[0].classList.remove("show");
    tabContent[1].classList.remove("show");
    tabContent[2].classList.remove("show");

    tabBtn[0].classList.remove("orange");
    tabBtn[1].classList.remove("orange");
    tabBtn[2].classList.remove("orange");

    tabContent[i].classList.add("show");
    tabBtn[i].classList.add("orange");
  });
}
