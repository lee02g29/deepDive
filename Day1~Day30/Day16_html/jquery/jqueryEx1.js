/*
$(css 선택자).동작함수()
*/

/* 
  Jquery 객체
  - 선택된 요소가 여러 개일 경우, 자동으로 리스트 만들어서 저장
  - 여러 개의 요소를 하나하나 조작할 필요 x
  - jquery가 하나씩 자동으로 반복하면서 동작을 적용
  */

$("body").css("background", "pink");

// 버튼들을 모두 찾아서 배경색 변경

/* 
  jquery 체이닝 
  - 여러 개의 기능을 연결해서 한줄로 순서대로 실행하는 기법
*/
// $(".btn").css("background-color", "yellow").css("font-size", "35px");

/*
  css()를 계속 쓰기 불편할 때가 있음.
  css() 안에서 키워드를 이용해서 값을 지정하는
  객체(Object) 형태를 사용할 수 있음
*/

$(".btn").css({
  background: "blue",
  color: "white",
  border: "1px solid #ccc",
});

// 자바스크립트로 작성
// const buttons = document.querySelectorAll('btn');

// for(let i = 0; i < buttons.length; i++) {
//   buttons[i].style.backgroundColor = 'yellow';
//   buttons[i].style.fontSize = '25px'
// }

/*
  jquery에서 사용하는 함수들
  요소를 가져올 수도 있고, 요소를 수정할 수도 있음

  요소 getter & setter

  html()
  text()
  width()
  height()
  attr()
  val()
*/

/* 
  innerHTML과 같음
*/
let p = $("p").html();
console.log(p);

/* 
  큰따옴표로 문자를 시작했다면, 중간에 강조가 들어가는 문자열은
  다른 걸로 작성하기 
*/

// $('p').html("<div clsss="wrap">제이쿼리입니다</div>")

//  html 내용을 새 값으로 덮어쓰기함
$("p").html("<div clsss='wrap'>제이쿼리입니다</div>");

/*
  선택된 요소 중에 첫 번째 요소의 텍스트만 가져옴
  자동으로 반복하면서 결과창에 찍었는지 모호함
*/

/* 
  textContent = text랑 같음 
  innerText, textContent, innerHTML의 차이점 확인
*/
let p2 = $("p").text("p 태그 바꿔봄");
console.log(p2);

$("img").width(200);
$("img").height(200);

/*
  이미지의 alt 변경 & 어트리뷰트 변경
*/
$("img").attr("alt", "시나모롤");

let select = $("select option");
console.log(
  select
    .first() // 첫번째 요소
    .text()
);
// 첫 번째 요소의 텍스트 내용을 가져옴

/* 
  요소를 순서대로 가져올 때는 eq(), get()
  eq() 제이쿼리 객체를 반환. 이어쓰기(체이닝) 가능
  get() 자바스크립트로 가져옴. getElementById()와 같음
 */

console.log(select.eq(1).text());
console.log(select.eq(2).text());
console.log(select.eq(3).text());
console.log(select.eq(4).text());

/*
  현재 선택된 selected가 붙은 요소의 값을 가져오고 싶음
*/
console.log("현재 selected: ", $("select option:selected").text());

/*
  필터링 메서드
  - 특정 조건에 맞는거만 골라내는 기능
*/

console.log($("li").first().text()); // 첫번째
console.log($("li").last().text()); // 마지막

console.log($("li").filter(":odd").text()); // 홀수만
console.log($("li").not(":odd").text()); // 짝수만

// has(), is(), slice()

/*
  $(document).ready(function(){ ... });	가장 전통적이고 정확한 형태
  $(function(){ ... });		       축약형, 가장 많이 쓰이는 방식
  $()=>{}
  jQuery(function(){ ... });	      $ 대신 jQuery 명시 (충돌 방지용)

*/
