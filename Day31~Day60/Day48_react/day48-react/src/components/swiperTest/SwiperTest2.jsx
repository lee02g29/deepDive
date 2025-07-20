import React from "react";
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperTest2() {
  return (
    <div>
      <h3>Swiper 자동 넘김</h3>
      <Swiper
        modules={[Autoplay]}
        autoplay={
          { 
            delay: 2000, // ms 단위
          }
        } // 자동으로 슬라이드를 넘기는 간격
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
    </div>
  );
}
/*
  modules
  - swiper가 가지고 있는 모듈 안에 원하는 기능만 선택적으로 등록해서
  사용할 수 있는 플러그인 시스템
  - swiper를 이용해서 슬라이더를 설정하면 모듈 단위로 나눠져 있어서,
  필요없는 기능을 제외시켜 사용하기 때문에 성능 최적화를 할 수 있음
  - Autoplay, Pagination, Navigation

*/