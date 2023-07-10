import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../../../index.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

const SwiperModule = () => {
  <Swiper
    effect={"cube"}
    grabCursor={true}
    cubeEffect={{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }}
    pagination={true}
    modules={[EffectCube, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <div>slide 1</div>
    </SwiperSlide>
    <SwiperSlide>slide 2</SwiperSlide>
    <SwiperSlide>slide 3</SwiperSlide>
    <SwiperSlide>slide 4</SwiperSlide>
  </Swiper>;
};

export default SwiperModule;
