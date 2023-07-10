import React from "react";
import classes from "./CarouselSection.module.css";

const CarouselCard = (icon, title, desctiption) => {
  <div className={classes.card}>
    <div className={classes.innerCard}>
      <div className={classes.iconWrapper}>{icon}</div>
      <h4>{title}</h4>
      <div className={classes.text}>{desctiption}</div>
    </div>
  </div>;
};

export default CarouselCard;
