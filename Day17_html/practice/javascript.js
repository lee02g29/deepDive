// 1
$("#showBtn").click(function () {
  $("#showBox").removeClass("hidden").animate({ top: "0px", opacity: 1 }, 500);
});

// 2

$("#changeBtn").click(function () {
  $("#box1").css("background-color", "pink");
  // animate를 쓰고싶다면 opcity를 줘서 점차 색을 사라지게 하고
  // 다음 색을 등장시킨다거나 하는 방법이 있음
});

// 3

let list = {
  햄버거: "🍔",
  피자: "🍕",
  초밥: "🍣",
};

// 요소 값 찾기 -> for each(값, 인덱스값) 같이
// 박스 -> 변수로 저장
// 코드 개선 예정
$("#eachBtn").click(function () {
  for (let key of Object.keys(list)) {
    let value = list[key];
    let post_content = $("<p></p>");
    let texts = key + " : " + value;
    post_content.text(texts).hide();
    $("#listBox").append(post_content);
  }

  let text = $("#listBox p");
  let index = 0;

  function eachList() {
    if (index >= text.length) return;

    $(text[index]).fadeIn(600, function () {
      index++;
      eachList();
    });
  }
  eachList();
});

// 4
// 추천하는 정렬 방법
$("#popBtn").click(function () {
  $("#box2")
    .animate(
      {
        width: "150px",
        height: "150px",
      },
      200
    )
    .animate(
      {
        width: "100px",
        height: "100px",
      },
      200
    );
});

// 5
$("#vanishBtn").click(function () {
  $("#vanish").fadeOut(600);
})