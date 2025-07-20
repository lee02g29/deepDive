import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperTest1() {
  return (
    <div>
      <h4>Swiper 예제1</h4>
      <Swiper>
        <SwiperSlide>
          <div style={{ backgroundColor: "cyan", padding: 50 }}>슬라이드1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: "beige", padding: 50 }}>슬라이드2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundColor: "lightcoral", padding: 50 }}>
            슬라이드3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

/*
  슬라이더 형 UI 컴포넌트 라이브러리
  - 이미지 슬라이더, 다단계 폼, 캐러셀 등의 화면을 만들 때 사용하는 도구
  - npm install swiper
  - Swiper는 swiper/react에서 가져올 것
    - 다른데서 가져오면  Class constructor _Swiper cannot be invoked without 'new' 오류남

  <Swiper> 전체 슬라이드를 감싸는 부모 컴포넌트가 필요
  <SwiperSlide spaceBetween={여백}> 각각의 슬라이드(페이지 하나)

  속성값
  spaceBetween={여백} 슬라이드 간 여백(px)
  slidePerView={1} 한 화면에 보여줄 슬라이드 수

  swiper.css를 반드시 포함해야함


  
*/
