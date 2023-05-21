import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselSection.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsHouseDoor } from "react-icons/bs";
import {
  MdHomeRepairService,
  MdOutlineAutorenew,
  MdOutlineWaves,
} from "react-icons/md";
import { GiTeePipe } from "react-icons/gi";

const CarouselSection = () => {
  const [screenWidth, setScreenWidth] = useState();
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  }, [window.innerWidth]);

  let scp = 15;
  if (screenWidth < 700) {
    scp = 80;
  }

  return (
    <div className={classes.carouselWrapper}>
      <h3>What we do...</h3>
      <h2>We provide quality roofing services</h2>
      <Carousel
        axis={"horizontal"}
        // autoFocus={true}
        // emulateTouch={true}
        centerSlidePercentage={15}
        centerMode={true}
        showThumbs={false}
        stopOnHover={true}
        swipeable={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={true}
        useKeyboardArrows={true}
        autoPlay={5000}>
        <div>
          <div className={classes.card}>
            <div className={classes.iconWrapper}>
              <MdOutlineAutorenew className={classes.icon} />
            </div>
            <h4>Renoviranje krova</h4>
            <div className={classes.text}>
              Roofing whenan unknow printer took a gallery of type and scrambled
              it to make a type specim...
            </div>
          </div>
        </div>
        <div>
          <div className={classes.card}>
            <div className={classes.iconWrapper}>
              <MdHomeRepairService className={classes.icon} />
            </div>
            <h4>Reparacija krova</h4>
            <div className={classes.text}>
              Roofing whenan unknow printer took a gallery of type and scrambled
              it to make a type specim...
            </div>
          </div>
        </div>
        <div>
          <div className={classes.card}>
            <div className={classes.iconWrapper}>
              <BsHouseDoor className={classes.icon} />
            </div>
            <h4>Izgradnja krova</h4>
            <div className={classes.text}>
              Roofing whenan unknow printer took a gallery of type and scrambled
              it to make a type specim...
            </div>
          </div>
        </div>
        <div>
          <div className={classes.card}>
            <div className={classes.iconWrapper}>
              <MdOutlineWaves className={classes.icon} />
            </div>
            <h4>Pokrivka limom</h4>
            <div className={classes.text}>
              Roofing whenan unknow printer took a gallery of type and scrambled
              it to make a type specim...
            </div>
          </div>
        </div>
        <div>
          <div className={classes.card}>
            <div className={classes.iconWrapper}>
              <GiTeePipe className={classes.icon} />
            </div>
            <h4>Ugradnja oluka</h4>
            <div className={classes.text}>
              Roofing whenan unknow printer took a gallery of type and scrambled
              it to make a type specim...
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
