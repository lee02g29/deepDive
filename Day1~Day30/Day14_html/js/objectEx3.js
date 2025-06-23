const products = [
  {
    title: "무선 마우스",
    price: 25000,
  },
  {
    title: "키보드",
    price: 45000,
  },
];

console.log(products);

const productList = document.getElementById("product-list");

const div = document.createElement("div");

div.className = "card";
div.innerHTML =`
  <h4>${products[0].title}</h4>
  <p>${products[0].price}</p>
`
productList.appendChild(div);

const productList2 = document.getElementById("product-list");

const div2 = document.createElement("div");

div2.className = "card";
div2.innerHTML =`
  <h4>${products[1].title}</h4>
  <p>${products[1].price}</p>
`
productList2.appendChild(div2);

/*
  for문, while 문
*/


/*
  배열을 이용한 데이터를 저장하는 구조

  자료 구조
  
  큐(Queue)
  - 먼저 들어간 데이터가 먼저 처리되서 나감
  (선입 선출, FIFO(First In First Out))
  - 대기줄, 대기표
*/

let fruits = []
fruits.push("오렌지")
fruits.push("사과")

// 제일 앞에 있는 요소를 제거하고 남아있는 요소 앞으로 밀어줌

console.log(fruits.shift())
console.log(fruits.shift())
console.log(fruits.shift())

let 대기표 = []

대기표.push(0);
대기표.push(1);
대기표.push(2);
대기표.push(3);

대기표.shift();

console.log(대기표)

/*
  뒤로가기 기능을 구현할 때 쓰는 자료구조

  스택(Stack)
  - 먼저 들어간 데이터가 가장 나중에 나옴
  - Last In First Out
*/

let stack = [];

stack.push(0);
stack.push(1);
stack.push(2);

// 가장 나중에 들어간 데이터를 가장 먼저 꺼내는 기능
stack.pop();