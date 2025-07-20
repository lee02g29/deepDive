import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';

export default function SwiperTest4() {
  return (
    <div>
      <h4>네비게이션</h4>
      <Swiper
        modules={[Navigation]}
        navigation
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
