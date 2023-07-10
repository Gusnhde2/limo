import { useState } from "react";
import classes from "./header.module.css";
import Navigation from "./Navigation";
import Modal from "../overlay/Overlay";
import Logo from "./logo.js";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [className, setClassName] = useState("");
  const [visibleHeader, setVisibleHeader] = useState();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled >= 300) {
      setVisibleHeader(false);
    } else if (scrolled <= 300) {
      setVisibleHeader(true);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  function handleClick() {
    setClassName("open");
    setShowModal(true);
  }

  function handleClose() {
    setClassName("closed");
    setTimeout(() => {
      setShowModal(false);
    }, 300);
  }
  return (
    <div className={visibleHeader ? classes.navbar : classes.sticky}>
      <Link to="/" className={classes.logo}>
        <Logo color={"#000"} background={"#fff"} width="24rem" />
      </Link>
      <Navigation />
      <div className={classes.buttons}>
        <button className={classes.menuButton} onClick={handleClick}>
          <Bars3Icon className={classes.icon} />
        </button>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          onClose={handleClose}
          className={className}
        />
      )}
    </div>
  );
};

export default Header;
