import { throttle } from "lodash";
import React, { useEffect } from "react";

export default function ThrottlingTest() {


  // 스토를링을 사용했을 때 성능 최적화
  useEffect(() => {

    const handleScroll = throttle(() => {
      console.log('스크롤 이벤트 발생 : ', window.screenY);
    }) ;
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener('xcroll', handleScroll);

  }, [])

  // useEffect(() => {
  //   const handleScroll = () =>
  //     console.log(" 스크롤 이벤트 발생 :", window.scrollY);
  //   // 마우스가 브라우저에서 움직일 때마다 실행
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div>
      {/* 스크롤 로그 제한 */}
      <h3>Throttling 스크롤 예제</h3>
      <p>스크롤 해보기, 로그가 1초에 한번 출력됨</p>
      <div style={{ height: "200vh", backgroundColor: "pink" }}></div>
    </div>
  );
}

/*
  Throttling
  - 일정 시간마다 한 번씩만 실행되게 제한하는 기법
  - 반복되는 이벤트 중 정해진 시간마다 한 번만 실행됨

  사용하는 이유
  - 초당 수십번 발생하는 이벤트를 일정 간격으로 제한해, 
    브라우저 렌더링/ 성능 최적화를 하기 위해 사용

  lodash 라이브러리를 이용해서 사용할 수 있음

  Throttling을 쓰지 않으면 엄청난 양의 로그가 발생함
  - 한 번만 마우스를 움직여도, 수 많은 로그가 출력됨
  - 위의 코드처럼 작성하면 성능 폭탄이 발생될 수 있음


*/
