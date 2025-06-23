console.log("연결");

// 기본형
$(document).ready(function () {
  console.log("연결됨");
});

// 축약형
$(function () {
  console.log("축약형");
});

// 에러발생을 최소화한 문법

// 애니메이션을 사용하기 위해서, 제이쿼리에서 제공하는 함수
// $(selector).animate({params});
/*
  animate 
  - 천천히 바뀌는 함수

  params : 변경할 속성 값
  speed, : ms(숫자), slow, fast
  callback : 애니메이션 완료 후 실행할 함수
 */

/*
  기본적으로 태그들(div, p , input 등)이 움직이기 위해서는 시작하는 위치를 알아야함
  position을 설정하는 이유 : 기본적으로 static
*/

// 버튼 클릭시 작동
$("#btnBox").click(function () {
  // 1. 실제 움직이는 요소 찾기
  $("#box1").animate(
    {
      left: "200px",
    },
    2000
  );
});

$("#btnGrow").click(function () {
  // 1. 실제 움직이는 요소 찾기
  $("#box2").animate(
    {
      width: "200px",
      height: "200px",
    },
    2000
  );
});

$("#btnFade").click(function () {
  // 투명도 0.2만큼 조절
  $("#box3").animate(
    {
      opacity: 0.2,
    },
    1000
  );
});

// $('#loopText').ready(function(){

// })

function moveBox() {
  $("#box1").animate(
    {
      left: "200px",
    },
    2000,
    loop
  );
}

// 점점 희미해짐 -> 이후 다시 보임
function loop() {
  // $("#loopText")
  //   .animate({ opacity: 0.2 }, 500)
  //   .animate({ opacity: 1 }, 500, loop);

  $("#loopText")
    .animate({ opacity: 0.2 }, 500)
    .animate({ opacity: 1 }, 500, moveBox);
}
/* 
  loop -> 원하는 함수명
  - 내가 작성한 함수명을 적음
  - 첫 번째 효과 실행 -> 두 번째 효과 실행 
  -> 어떤 함수를 실행할지 함수를 작성, 
  - 무한 반복을 하고 싶을 때 : 원하는 함수명 작성시, 연결해서 실행가능
  -> 자신의 함수명을 쓰면 무한반복으로 실행함


*/

/* 깜빡이는 코드 함수 */
loop();

// 진행 바를 움직이게 이동

// 퍼센트 가운데 정렬
// 퍼센트 증가 속도에 맞춰 숫자 변경
// setInterval
$("#fillBtn").click(function () {
  $("#bar").animate({ width: "100%" }, 10000);

  let percent = 0;
  let interval = setInterval(() => {
    if (percent > 100) {
      clearInterval(interval);
      return;
    }

    $(".bar___text").text(percent + "%");

    percent++;
  }, 10000 / 100);
});

