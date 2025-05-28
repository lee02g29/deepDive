/*
  let -> 변수
  let 변수명 -> 값 변경가능

  const 변수명 -> 값 변경 불가
*/

// 1. 객체 생성
const userInfo = {
  userName: "perdy",
  userAge: 20,
  userAddress: "경기도",
};

// 2. 위치 찾기 + 추가
document.getElementById("info").innerHTML = `<p>이름:${userInfo.userName}
나이: ${userInfo.userAge}
</p>`;

// ---

// 1. 객체 생성
const studInfo = {
  name: "perdy",
  age: 20,
  address: "경기도",
};

// 2. 위치 찾기
const ul = document.getElementById("userList")
console.log(ul)

// 3. li 태그 추가하기
let li = document.createElement("li")
// li.innerText = "이름 :" + studInfo.name + "나이 : " + studInfo.age;
li.innerText = `이름 : ${studInfo.name} 나이 : ${studInfo.age}`
console.log(li);

// 4. 추가
ul.appendChild(li);