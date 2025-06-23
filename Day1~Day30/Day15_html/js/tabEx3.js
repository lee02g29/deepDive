
/*
  반복문

  for each()
  - 배열이나 리스트에서 하나씩 처리할 때 쓰는 반복문
  - 배열이나 유사 배열(NodeList)의 각 요소를 하나씩 꺼내서
    어떤 작업을 수행하게 해주는 반복 기능
 */

let fruits = ["🍇", "🍎" , "🍌", "🍏"];

/* 
  긴 반복문을 간단하게 줄여주는 화살표 함수(Arrow Function)
  - 코드를 더 짧게 쓰고, 간결한 콜백 처리를 가능하게 함
*/
fruits.forEach((value) => {
  console.log(value)
})