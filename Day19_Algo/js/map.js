// 숫자를 두 배로 만들기
let numbers = [1, 2, 3];

/*
  맵을 안쓴다면,

  새로운 배열 만들기
  배열에서 하나씩 꺼내기
*/

let copyNumbers = [];

// for(let start = 0; start < numbers.length; start++) {
//   copyNumbers.push(numbers[start] * 2);
// }

for (let num of numbers) {
  copyNumbers.push(num * 2);
}

console.log("변경된 값", copyNumbers);

/*
  맵이 없다면 코드가 길어짐
  -> 그래서 맵이 등장함
*/

let copyNumbers2 = numbers.map((num) => num * 2);

console.log("변경된 값2", copyNumbers2);

// 과일 이름 앞에 이모지 붙이기
let fruits = ["사과", "바나나", "포도"];

let copyFruits = fruits.map((fruits) => "😺" + fruits);

console.log(copyFruits);

// 학생 이름에 번호 붙이기
let names = ["A", "B", "C", "D", "E"];

let copyNames = names.map((name, index) => `<li>${index + 1}. ${name}</li>`).join('');
// join쓰면 ','가 쪼개져서 붙는 것을 지울 수 있음

document.getElementById("list").innerHTML = copyNames
// console.log(copyNames);
