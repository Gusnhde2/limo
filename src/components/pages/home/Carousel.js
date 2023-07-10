import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../../../index.css";
import { EffectCube, Pagination } from "swiper";
import classes from "./CarouselSection.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  MdHomeRepairService,
  MdOutlineAutorenew,
  MdOutlineWaves,
} from "react-icons/md";
import { GiTeePipe } from "react-icons/gi";

const CarouselSection = () => {
  return (
    <div className={classes.carouselWrapper}>
      <h3>Čim se bavimo...</h3>
      <h2>Nudimo profesionalne krovarske i limarske usluge</h2>
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
          <div className={classes.card}>
            <div className={classes.innerCard}>
              <div className={classes.iconWrapper}>
                <MdOutlineWaves className={classes.icon} />
              </div>
              <h4>Pokrivka limom</h4>
              <div className={classes.text}>
                Roofing whenan unknow printer took a gallery of type and
                scrambled it to make a type specim...
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.card}>
            <div className={classes.innerCard}>
              <div className={classes.iconWrapper}>
                <MdOutlineAutorenew className={classes.icon} />
              </div>
              <h4>Renoviranje krova</h4>
              <div className={classes.text}>
                Roofing whenan unknow printer took a gallery of type and
                scrambled it to make a type specim...
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.card}>
            <div className={classes.innerCard}>
              <div className={classes.iconWrapper}>
                <GiTeePipe className={classes.icon} />
              </div>
              <h4>Ugradnja oluka</h4>
              <div className={classes.text}>
                Roofing whenan unknow printer took a gallery of type and
                scrambled it to make a type specim...
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.card}>
            <div className={classes.innerCard}>
              <div className={classes.iconWrapper}>
                <MdHomeRepairService className={classes.icon} />
              </div>
              <h4>Reparacija krova</h4>
              <div className={classes.text}>
                Roofing whenan unknow printer took a gallery of type and
                scrambled it to make a type specim...
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselSection;
