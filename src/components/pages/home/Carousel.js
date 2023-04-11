import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselSection.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsHouseDoor } from "react-icons/bs";

const CarouselSection = () => {
  const [screenWidth, setScreenWidth] = useState();
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  }, [window.innerWidth]);

  let scp = 30;
  if (screenWidth < 700) {
    scp = 85;
  }

  return (
    <div className={classes.carouselWrapper}>
      <h3>What we do...</h3>
      <h2>We provide quality roofing services</h2>
      <Carousel
        axis={"horizontal"}
        centerSlidePercentage={scp}
        centerMode={true}
        showThumbs={false}
        stopOnHover={true}
        swipeable={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={true}
        // width={1350}
        useKeyboardArrows={true}
        autoPlay={5000}>
        <div>
          <div className={classes.card}>
            <div className={classes.iconWrapper}>
              <BsHouseDoor className={classes.icon} />
            </div>
            <h4>Roof Renovation</h4>
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
            <h4>Roof Renovation</h4>
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
            <h4>Roof Renovation</h4>
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
            <h4>Roof Renovation</h4>
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
