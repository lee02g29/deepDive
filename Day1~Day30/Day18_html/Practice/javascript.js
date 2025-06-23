let timer = setInterval(() => {
  let dueDay = Date.parse("2025/06/03 17:00:00");
  let now = new Date();
  const diff = dueDay - now;

  // 남은시간 마이너스 처리하기 -> 타이머 멈추기
  // if문 작성 자리 마이너스 -> 00:00:00 처리하기
  // return 같이 써서 종료하기
  if (diff <= 0) {
    let countdown = "00:00:00" + "  종료되었습니다.";
    document.getElementById("timer").textContent = countdown;

    clearInterval(timer);

    return;
  }

  let totalSeconds = Math.floor(diff / 1000);

  let hours = Math.floor(totalSeconds / (60 * 60));
  let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  // 시간을 계산하고 남은 분량으로 분을 계산
  let seconds = totalSeconds % 60;
  // 잘못한거 정리해두기

  let formattedHours = ("0" + hours).slice(-2);
  let formattedMinutes = ("0" + minutes).slice(-2);
  let formattedSeconds = ("0" + seconds).slice(-2);
  // String(timeMin).padStart(2,”0”);
  // padStart(길이,부족한 자리수를 무엇으로 재울지 지정)
  // 문자열 포맷팅

  let countdown =
    formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
  console.log(countdown);
  document.getElementById("timer").textContent = countdown;
}, 1000);

// 데이터 배열로 바꿔서 해보기

// 추가 : 시계는 보통 백엔드에서 서버 시간을 내려줌

