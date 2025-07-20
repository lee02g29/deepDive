import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';

export default function SwiperTest3() {
  return (
    <div>
      <h3>페이지네이션</h3>
      <Swiper
        modules={[Pagination]}
        pagination={{clickable: true}}
        // 점을 클릭하면 이동할 수 있게 설정
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
하단에 ... 페이지 점 표시
*/
