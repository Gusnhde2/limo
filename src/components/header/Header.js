import { useState } from "react";
import classes from "./header.module.css";
import Navigation from "./Navigation";
import Modal from "../overlay/Overlay";
import Logo from "./logo.js";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }
  return (
    <div className={classes.navbar}>
      <a href='#' className={classes.logo}>
        <Logo color={"#000"} background={"#fff"} width='24rem' />
      </a>
      <Navigation />
      <div className={classes.buttons}>
        <button className={classes.menuButton} onClick={handleClick}>
          <Bars3Icon className={classes.icon} />
        </button>
      </div>
      {showModal && <Modal showModal={showModal} onClose={handleClose} />}
    </div>
  );
};

export default Header;
