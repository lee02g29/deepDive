/* 
  호이스팅(Hoisting)
  - 자바스크립트에서 변수, 함수 선언 
    이 코드 실행 전에 위로 끌어올리는 동작
  - 코드 실행하기 전에 변수 선언(var, let), 함수(fuction)을
  스코프의 최상단으로 끌어올리는 것
*/

var num = 1;

console.log("num : ", num);

// num2 = 100;
// console.log("num2 : ", num2);
/* 
num2 변수를 찾을 수 없음 
-> Uncaught ReferenceError : num2 is not defined
*/
// var num2;
// 여기 놓으면 undefined

/* 
  항상 변수를 만들 때는 위에 먼저 만들고 
  그 다음에 실행하는 문장 작성
*/

let num2 = 100;
console.log(num2);

// Cannot access 'num3' before initialization
// 변수를 미리 만들고 저장해야하는데 안만들었음
// num3 = 100;
// console.log(num3);

// let num3;

// 

let name ="perdy"
let nums = 30;

/*
  컴퓨터가 데이터(값)의 타입을 확인

  숫자
    일반 숫자 : 1, 2, 3...
    특수 숫자 : infinity(무한대), NaN(계산 중 에러)
    소수점이 없는 숫자 - 정수
    소수점이 있는 숫자 - 실수
  문자형(stringType)
    문자 하나, 문자 여러 개 (문자열)
    "", '' 둘 중 하나 쓰면됨


    문자 안에 변수를 집어넣을 수 있음
    백틱 ``
    console.log(`age의 값은 ${age}`);
  
*/ 


let age = 20;
age = "hello"

/* 
  자바스크립트는 자동으로 타입을 저장해줌 
  처음에는 정수를 저장하는 타입으로 공간이 생겼다가
  그 다음에 문자를 저장할 때, 문자를 저장하는 공간으로
  자동으로 변경
*/

// 변수의 이름을 작성할 때 규칙
/* 변수명을 작성할 때는 정보를 담고 있는 이름 */

console.log(`age의 값은 ${age}`);

// 세미콜론 (마침표)
let name2 = "escher";
let age2 = 20;
let address = "한국" 

console.log("이름", name2, "나이",age2, "주소", address);
console.log(`이름 ${name2} 나이${age2} 주소${address}`);

/* BooleanType
참과 거짓 두가지만 저장하는 타입 */

let result = true;
let result2 = false;

/*
  undefined
  - 변수를 만들었는데 값이 없음
  - 이런 경우, 자바스크립트가 자동으로 undefined를 넣어줌
 */

let name3;
console.log("이름 3 : ", name3);

/* 
  객체(Object), 심볼(symbol)
  - 데이터 컬렉션이나 복잡한 개체를 표현할 수 있음
*/

/* 
  typeof 연산자
  어떤 타입인지 확인하는 연산자
*/

console.log(typeof result2)

let a = 10
let b = 20;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b) // 나눗셈
console.log(a % b) // mod 연산

console.log("20" + 1);
/* 
  문자랑 숫자를 더하면 연결됨 
  앞에 있는 문자 20과 숫자 1을 변형
  -> 문자 "201"로 변경
*/
console.log(typeof ("20" + 1));

/* 
  자바스크립트는 타입을 확인해서 
  - 와 / 는 자동으로 숫자로 변형하여
  계산 후 결과를 알려줌
*/
console.log(6 - "2");
console.log(typeof (6 - "2"));

console.log("6" / "2");
console.log(typeof ("6" / "2"));

// 

/*
  비교 연산자
*/

let num4 = 10;
let num5 = 20;

console.log("값이 같은지", num4 == num5);

console.log("값이 같은지", 10 == 10);

num4 = 10;
num5 = '10'

/* 
  자바스크립트에서는 == 값만 같으면 됨, 타입 무관
  === 값과 타입이 모두 일치해야함
*/

console.log("값이 같은지", num4 == num5);

console.log("값이 같은지", 10 == 10);