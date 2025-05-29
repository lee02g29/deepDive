console.log($("img").width("200").height("300"));

// 이미지 보이기/숨기기

$("#btn1").on({
  click: function () {
    $("#img1").fadeOut("1200").fadeIn("1200");
  },
});

// 마우스 버튼에 올라가면 텍스트 글씨 쓰기
$("#btn2").on({
  mouseenter: function () {
    $("#event").append("마우스 버튼 위로 올라옴<br>");
  },
});

// 이미지 슬라이드 접었다 폈다
$("#btn3").on({
  click: function () {
    $("#img2").slideUp("1200").slideDown("1200");
  },
});

// 버튼 4개 만들어서 배경색 바꾸기

$("#red").on({
  click: function () {
    $("body").css("background", "red");
  },
});
$("#blue").on({
  click: function () {
    $("body").css("background", "blue");
  },
});
$("#yellow").on({
  click: function () {
    $("body").css("background", "yellow");
  },
});
$("#green").on({
  click: function () {
    $("body").css("background", "green");
  },
});

// 로그인 버튼
$("#login").on({
  click: function () {
    $(".popup__back").removeClass("hide").hide().fadeIn(800);
  },
});
/*
  jQuery의 fadeIn()은 내부적으로 display: none 상태를 display: block으로 바꿔서 보여줌

  display 속성을 자동으로 계산하여 복구 ->  항상 원래의 display: flex를 정확히 되살리지 못할 수 있음
  div 요소의 기본 display는 block -> display: flex였던 것도 block으로 나올 수 있음.

  => 애니메이션은 되지만, display: flex가 적용되지 않을 수 있음.
  → 정렬이 깨지거나 내부 요소 위치가 틀어질 수 있음.

  jQuery의 .fadeIn()은 내부적으로 display: none이 되어 있는 요소만 동작
  .removeClass('hide')만 하면 display: flex가 되기 때문에, .fadeIn()이 작동x

  1. display: none이 제거됨
  2. 잠깐 다시 none으로 설정 (애니메이션 준비)
  3. display: flex로 복귀하며 애니메이션 실행

  */

$("#popup__close").on({
  click: function () {
    $(".popup__back").fadeOut(800).addClass("hide");
  },
});
