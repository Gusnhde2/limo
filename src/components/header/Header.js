import { useState } from "react";
import classes from "./header.module.css";
import Navigation from "./Navigation";
import Modal from "../overlay/Overlay";
import Logo from "./logo.js";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Logo color={"#000"} background={"#fff"} width='400' />
      </div>
      <Navigation />
      <div className={classes.buttons}>
        <button>
          <MagnifyingGlassIcon className={classes.icon} />
        </button>
        <button className={classes.menuButton} onClick={handleClick}>
          <Bars3Icon className={classes.icon} />
        </button>
      </div>
      {showModal && <Modal showModal={showModal} onClose={handleClose} />}
    </div>
  );
};

export default Header;
