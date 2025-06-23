

/*
  로컬 스토리지
  오직 문자열(String)타입만 저장가능함

  Casting / 형변환
  - 자동으로 숫자를 문자로 변경(묵시적 형변환)

*/
function intEx() {
  localStorage.setItem("Integer", 1);
}

function intLoad() {
  const intLoad = localStorage.getItem("Integer");
  console.log("정수 : ", intLoad)
  console.log("타입 : ", typeof intLoad)
}


function arrayEx() {
  localStorage.setItem("과일", JSON.stringify("['🍎','🍏','🍌']"));

}

function arrayLoad() {
  const arrayLoad = localStorage.getItem("과일");
  console.log("과일 : ", arrayLoad)
  console.log("타입 : ", typeof arrayLoad)

  /* JSON / Javascript Object Notation
    - 자바스크립트 객체 형식을 문자열로 변경하는 것
    - 파이썬, 자바, C# 통신이 가능
    - API 요청/응답, DB 저장 등에 사용
    - key:value를 이용해서 데이터를 저장하는 구조
    - 문자열 형태로 구조화하여 저장하거나 전송함

    - 자바스크립트 객체처럼 생긴 문자열


    문자열로 저장된 JSON 데이터를 다시 자바스크립트 객체로 변환하는 함수
  */
  const getFruits = JSON.parse(arrayLoad);
  // 로컬 스토리지는 모두 문자열로 저장되기 때문에, Object값을 가져와서 Array
  console.log("변경된 타입 : ", typeof Array(getFruits))
  console.log("배열형태로:", getFruits[0])
}

/*
회원 가입시 아이디, 비밀번호, 주소, 이메일
-> 클래스
 */

/*
  객체는 한 번 만들고 끝나면, 또 다른 데이터를 저장할 때마다 계속 만들어서 써야함
*/

// 클래스로 틀을 만들어서 여러 명한테 똑같은 공간을 제공
class UserInfo {

}