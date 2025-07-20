import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function SwiperTest5() {

  /*
    useRef
    - swiper 인스턴스(슬라이더 객체)를 직접 지정해서 제어하기 위해
    useRef를 사용
    - DOM 요소 또는 swiper 객체 같은 외부 객체를 다룰 때 사용
  */

  const swiperRef = useRef(null)

  return (
    <div>
      <h4>Swiper + 수동 제어(slideNext())</h4>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <div style={{ backgroundColor: "cyan", padding: 50 }}>슬라이드1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: "beige", padding: 50 }}>슬라이드2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: "lightpink", padding: 50 }}>
            슬라이드3
          </div>
        </SwiperSlide>
      </Swiper>

      <button onClick={() => swiperRef.current.slideNext()}>다음</button>
    </div>
  );
}


/*
  실행 순서
  1. 컴포넌트 렌더링
  2. Swiper 컴포넌트 마운트
  3. onSwiper 콜백 실행됨 -> Swiper.current 인스턴스 저장
  4. 사용자가 버튼을 클릭하면 
  5. onClick 이벤트가 발생
  6. SwiperRef.current.slideNext() 실행
  7. Swiper 내부 슬라이드 이동(트랜지션 발생)
*/