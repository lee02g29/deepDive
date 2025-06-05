/*
  스프레드 연산자
  - 배열(Array) 또는 객체(Objectd) 안에 있는 값을
  펼쳐서 다른 배열이나 객체 안에 넣어주는 역할을 함

  배열 앞에 ...를 붙이면 배열 내부의 요소들을 개별 값으로 분리함.
  객체 앞에 ...을 붙이면 객체의 key, value 쌍으로 분리함.

  쉽게 배열을 합치거나, 객체 복사 및 병합을 할 수 있음.
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 위에 두 배열을 모두 합친 새 배열 만들기
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// 배열에 새 요소 추가
const fruits = ["🍎", "🍏", "🍌"];

// 맨 앞에 새로운 과일을 추가, 맨 뒤에 새로운 과일 하나 추가
const newFruits = ["🍇", ...fruits, "🍓"];
console.log(newFruits);

// 객체를 이용해서 복사를 진행
const user = {
  name: "철수",
  age: 10,
};

// user 객체 안에 프로퍼티를 모두 펼쳐서 새로운 객체를 만들고, city를 추가

// 객체는 순서가 없는 자료형
const userCopy = {
  ...user,
  city: "서울",
};

console.log(userCopy);

/*
  프론트엔드에서 스프레드를 사용하는 이유
  - 상태가 기록 같이 자주 쓰이는 원본을 직접 바꾸면 버그가 생기기 쉬움

  프로그래밍 언어의 속도(성능) 메모리(자원)으로 인해, 배열(객체)의 주소를 넘겨줌
  */

const arr4 = [1, 2, 3];
const arr5 = arr4;

arr5.push(4);

console.log("4 : ", arr4);
console.log("5 : ", arr5);

//

const arr6 = [1, 2, 3];
const arr7 = [...arr6];

arr7.push(4);
console.log("6 : ", arr6);
console.log("7 : ", arr7);
