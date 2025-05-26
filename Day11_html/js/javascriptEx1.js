// 복잡한 코드를 짧게 바꾸고 싪을 때 사용하는 문법
// function

// 클릭했을 때 실항하는 내용이 2줄 이상 될 때
// 1. 요소값 가져오기
// 2. 기존에 누적된 값이 있으면 더해서 값을 기억(저장)
//    변수
// 3. 변경된 값을 html로 보내기

var total = 0;

function clickSum(tag) {
  console.log(tag);

  // tag가 가져온 값에 value속성은 실제 클릭한 값임임
  console.log("value: " + tag.value);

  // html에서 오는 값은 모두 문자로옴
  // 문자를 숫자로 변경하는 기능
  // parseInt(문자)
  total = total + parseInt(tag.value);

  // 태그에서 꺼낸 value를 html로 보내기
  document.getElementById("total").innerHTML = total;
}
