/*
  스택
  - 나중에 넣은 것부터 먼저 꺼내는 구조
  - 프론트엔드에서는 실행취소, 페이지 이동 히스토리, 브라우저 뒤로 가기 등에
  많이 사용됨

  자바 스크립트에서 배열을 이용해서 실행 취소를 구현
 */

let history = [];

// 자바스크립트에서 입력창 띄워서 입력받기
function addHandle() {
  const value = prompt("추가할 값을 입력");

  /* 예외 처리
    - 비정상적인 값이 들어왔을 때, 프로그램이 정지함
    - 비정상적으로 프로그램이 멈추지 않도록 처리
    */

  if (value) {
    // 값이 있으면 실행
    add(value); // 값을 저장하는 함수를 실행
  }
}

function add(value) {
  history.push(value);
  console.log(history);
  // console.log(history.reverse());
  renderStack();
}

function undo() {
  // 예외적인 처리
  if (history.length == 0) {
    alert("되돌릴 작업이 없습니다");
    return;
  }
  const removed = history.pop(); // 원본 배열에서 삭제
  renderStack(); // 삭제한 데이터 제거 후, 다시 렌더링
  alert(`삭제한 값 : ${removed}`);
}

// 위에 추가한 내용을 html에 스택 쌓는 명령어를 구현하는 함수
function renderStack() {
  // div 찾기
  const stackView = document.getElementById("historyBox");
  stackView.innerHTML = "";
  [...history].reverse().forEach((item) => {
    const div = document.createElement("div");
    div.className = "stack-item";
    div.textContent = item;
    stackView.appendChild(div);
  });

  /*
    createElement()
    className
    내용이 들어가야하므로 textContent
    ...(spread)
    - 배열을 복사하거나 펼칠 때 사용
    - reverse()
      - 배열의 순서를 뒤집는 함수
  */
}

/*
  큐(Queue)
  - 먼저 들어간 데이터가 먼저 나오는 방식
  - First in First Out
  - 줄서기

  push(), shift()
*/

let queue = [];
// queue.push("알림1");
// queue.push("알림2");

// console.log(queue);
// console.log(queue.shift());

function addQueueHandle() {
  // prompt로 받아서 알림 내용 입력
  const alertText = prompt("알림 내용을 입력하세요");

  // 예외 처리 : 만약 값이 있으면 저장하고 없으면 함수 종료
  if (alertText) {
    queue.push(alertText);

    // html에 그리기
    renderQueue();
  }
}

// html에 큐를 그리는 함수
function renderQueue() {
  // 요소 찾기
  const alertBox = document.getElementById("alertQueueBox");

  // 기존에 있던 내용 지우기
  alertBox.innerHTML = "";

  // 순서대로 값을 하나씩 가져와서 출력
  // item 변수는 값을 하나씩 꺼내서 저장함
  queue.forEach((item) => {
    // div 생성 후 스타일 클래스 추가, 이후 내용 추가
    const div = document.createElement("div");
    div.className = "queue-item";
    div.textContent = item;

    // 화면에 추가
    alertBox.append(div);
  });
}

  function removeQueue() {
    // 예외 처리

    if(queue.length > 0) {
      alert("처리된 알림 : " + queue.shift()); // 앞에서 제거
      renderQueue();
    } else {
      alert("처리할 알림이 없습니다.")
    }
  }