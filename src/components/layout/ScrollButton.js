import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import classes from "./ScrollButton.module.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button className={visible ? classes.scrollButton : classes.inactive}>
      <AiOutlineArrowUp className={classes.arrowUp} onClick={scrollToTop} />
    </button>
  );
};

export default ScrollButton;
