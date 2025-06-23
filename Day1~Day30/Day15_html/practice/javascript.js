let output1 = "";

for (let i = 1; i <= 10; i++) {
  output1 += i + ", ";
}

console.log(output1);

// 2
let output2 = "";

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    output2 += i + ", ";
  }
}

console.log(output2);

// 3
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

let fruits = ["사과", "바나나", "포도"];

// 4
for (let fruit of fruits) {
  console.log(fruit);
}

// 5
for (let fruit in fruits) {
  console.log(fruit, ": ", fruits[fruit]);
}

// 6
for (let i = 1; i <= 9; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}


// foreach - 자료형 따로 있음
// jquery 돔 타입과 document 돔 타입이 다름